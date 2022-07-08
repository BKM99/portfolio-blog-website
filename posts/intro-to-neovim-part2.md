---
title: 'Introduction to (Neo)vim part 2'
date: 'May 22, 2022'
excerpt: 'The second part in a two part series on Vim/Neovim. Part 2 will go over customizing and configuring Neovim in Lua.'
cover_image: '/images/posts/neovim-p2.png'
---
Before we get started with the actual setup and configuration of Neovim, you should know that there are already pre-built
configurations that you just have to download. This takes most of the work out of setting up and configuring Neovim. Below
I will list some of the popular pre-built Neovim configurations. However, I highly recommend that you first start off with
setting up your own personal Neovim configuration. This will allow you to understand what your specific Neovim configuration
is capable of fully. You will also learn a little bit of the Lua programming language along the way.

1. [LunarVim](https://github.com/LunarVim/LunarVim)
2. [AstroVim](https://github.com/AstroNvim/AstroNvim)
3. [NvChad](https://github.com/NvChad/NvChad)
4. Reddit and GitHub - people often post their own Neovim configurations on Reddit and GitHub. You can find them under
things like r/Neovim, r/unixporn, or GitHub repos named something like "dotfiles", "configs", or "nvim"

Note: my Neovim configuration is based off of [chris@machine](https://github.com/ChristianChiarulli). I found his configuration
to be simple and very easy to understand.

## Now let's get started!
For the remainder of this tutorial I wil be under the assumption that you have Neovim installed and are able to trouble
shoot some of the issues that you may encounter. Everybody’s computers are different and you may or may not face issues
when trying to configure Neovim.

### init.lua
Your init.lua file should be located under $HOME/.configs/nvim/
If it is not there then use this command to create it:
```
cd ~
mkdir -p .config/nvim
cd .config/nvim/
touch init.lua
```

Now you should have the init.lua file created.

Currently, this is what my Neovim configuration looks like.

You can find my Neovim configuration and other dotfiles [here](https://github.com/BKM99/configs)


```
.
├── ftplugin
│   └── java.lua
├── init.lua
└── lua
    └── user
        ├── autocommands.lua
        ├── autopairs.lua
        ├── cmp.lua
        ├── colorizer.lua
        ├── colorscheme.lua
        ├── comment.lua
        ├── dap.lua
        ├── gitsigns.lua
        ├── impatient.lua
        ├── indent.lua
        ├── keymaps.lua
        ├── lsp
        │   ├── init.lua
        │   ├── lsp-functions.lua
        │   └── lsp-installer.lua
        ├── lualine.lua
        ├── null-ls.lua
        ├── nvim-tree.lua
        ├── options.lua
        ├── plugins.lua
        ├── symbol-outline.lua
        ├── telescope.lua
        ├── todo-comments.lua
        ├── treesitter.lua
        └── trouble.lua

4 directories, 26 files

```
In this tutorial, we will only be setting up a subset of my configuration.
I also don’t want to force the plugins and settings that I use onto you. You should only use what you need. If you feel you do not need
certain things then by all means do not use them.

## Plugin Manager
Right now the two most popular plugin managers are [vim-plug](https://github.com/junegunn/vim-plug) and
[packer](https://github.com/wbthomason/packer.nvim). For this tutorial, I’ll be using packer. For more information,
you can go to their respective GitHub repos.

Plugin managers are used to manage the plugins that you choose to include in your config. Both Vim and Neovim have their own built-in
plugin/package managers. However, most people use a third-party plugin manager because they are more sophisticated and offer more
flexibility.

Let’s create a directory on the same level as init.lua called “lua”. Inside this lua directory will contain all Lua code for all of your
plugins. Next, inside of your lua directory create another directory called “user” (you can name it anything that you want, we are
creating this to help avoid any namespace issues). Inside of “lua/user” create a file called “plugins.lua”.

The structure of your configuration should look like this:

```
.
├── init.lua
└── lua
    └── user
        └── plugins.lua

```
“plugins.lua” will contain all the list of plugins managed by packer. Inside "plugins.lua" copy and paste the chunk of code below to download and set up packer.

```
local fn = vim.fn

-- Automatically install packer
local install_path = fn.stdpath "data" .. "/site/pack/packer/start/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
    PACKER_BOOTSTRAP = fn.system {
        "git",
        "clone",
        "--depth",
        "1",
        "https://github.com/wbthomason/packer.nvim",
        install_path,
    }
    print "Installing packer close and reopen Neovim..."
    vim.cmd [[packadd packer.nvim]]
end

-- Use a protected call so we don't error out on first use
local status_ok, packer = pcall(require, "packer")
if not status_ok then
    return
end

-- Install your plugins here
return packer.startup(function(use)

    use "wbthomason/packer.nvim" -- Have packer manage itself

    -- Automatically set up your configuration after cloning packer.nvim
    -- Put this at the end after all plugins
    if PACKER_BOOTSTRAP then
        require("packer").sync()
    end
end)
```
Before continuing let’s briefly go over that chunk of code. In Lua, variables are declared with the “local” keyword. Variables
without that keyword will be made global to the entire project. On the first line, we are simply creating a variable “fn” to
create a shorthand syntax so we don’t have to write “vim.fn” everywhere. Next, we are defining the path to tell packer where to
install itself. If that directory is empty that means packer is not installed so it will use git and clone the repo to that
directory. After that, we are using something called a “pcall” aka protected call. This is how Lua does error handling. “pcall”
takes a function as the first parameter and the rest of the arguments are the parameters to that function. Basically, we are
checking to make sure that packer is installed, or else return. The last piece of the code block is to simply tell packer what
plugins to install and manage.

The syntax for the packer plugin manager is to use the “use” keyword along with the username and the GitHub repo name. For
example, the URL to the packer GitHub repo is “https://github.com/wbthomason/packer.nvim”, but all you need is the
“wbthomason/packer.nvim” part. Essentially, packer just clones the GitHub repo and uses special functions to manage it.

Now, we have packer set up, but if we close and restart Neovim nothing will happen. That is because we did not require the
“plugins.lua” file. All you need to do is go to the “init.lua” file and type:

```
require "user.plugins"
```

This line of lua code tells the "init.lua" to look inside "lua/user/plugins.lua" and execute the code inside that file.
Just a reminder that the "lua" is where Neovim looks for lua code. Now, for all future plugins just go to the "plugins.lua"
file and type "use github-username/plugin-name" and packer will manage that plugin for you. Sometimes the packer command might
be slightly more complicated but in the "README.md" file the installation instructions should be clearly defined for that plugin.

## Options
Now that we have the plugin manager set up let’s define some basic options that Neovim will load on the startup. First, create
a file called “options.lua” inside of “lua/user”.

```
.
├── init.lua
└── lua
    └── user
        ├── options.lua
        └── plugins.lua

```

To define some options just type “vim.opt.nameofoption = something”

This is what my "options.lua" looks like.

```
vim.opt.relativenumber = true
vim.opt.incsearch = true
vim.opt.ignorecase = true
vim.opt.smartcase = true
vim.opt.gdefault = true
vim.opt.backspace = { "indent", "eol", "start" }
vim.opt.swapfile = true
vim.opt.fileencoding = "utf-8"
vim.opt.number = true
vim.opt.mouse = "a"
vim.opt.wrap = false
vim.opt.showmode = false
vim.opt.scrolloff = 8
vim.opt.sidescrolloff = 8
vim.opt.hidden = true
vim.opt.lazyredraw = true
vim.opt.timeoutlen = 200
vim.opt.laststatus = 2
vim.opt.completeopt={ "menu", "menuone", "noinsert", "noselect" }
vim.opt.cmdheight = 2
vim.opt.updatetime = 300
vim.opt.undofile = true
vim.opt.cursorline = true
vim.opt.clipboard = "unnamedplus"
vim.opt.signcolumn = "yes"
vim.opt.backup = false
vim.opt.writebackup = false
vim.opt.shortmess:append "c"
vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.autoindent = true
vim.opt.smartindent = true
vim.opt.termguicolors = true
vim.cmd [[syntax on]]
vim.opt.background = "dark"
vim.cmd [[filetype plugin indent on]]
```

Now, just like for the "plugins.lua" we need to require the file in "init.lua". At this point your "init.lua" will look like this:

```
require "user.plugins"
require "user.options"
```

## Adding a new plugin

1. Find the GitHub URL and extract the username and name of the repo
2. Add the line "use username/pluginname" to the "plugins.lua" file
3. Go into command mode and type ":PackerSync" to install and update the plugins you have defined.
4. Create a new file in "lua/user" add the configuration settings to that file
5. Require the newly created file in "init.lua"

## Example of adding a new plugin

For this example, we will be adding a plugin called "Nvim-tree". This is a plugin that creates a simple file tree explorer.

This is the GitHub URL "https://github.com/kyazdani42/nvim-tree.lua". First, we extract the username and repo name and add it
to the "plugins.lua" file.

```
use {
  'kyazdani42/nvim-tree.lua',
  requires = {
    'kyazdani42/nvim-web-devicons', -- optional, for file icons
  },
  tag = 'nightly' -- optional, updated every week. (see issue #1193)
}
```

This is slightly more complicated then what we did before, but all I did was look inside the "README.md" file for the Nvim-tree
plugin. This also shows some of the power that the packer plugin manager has.

Now, let's create a file called "nvim-tree.lua" inside of "lua/user". Inside this file we can just copy and paste from the
README.

```
-- examples for your init.lua

-- empty setup using defaults
require("nvim-tree").setup()

-- OR setup with some options
require("nvim-tree").setup({
  sort_by = "case_sensitive",
  view = {
    adaptive_size = true,
    mappings = {
      list = {
        { key = "u", action = "dir_up" },
      },
    },
  },
  renderer = {
    group_empty = true,
  },
  filters = {
    dotfiles = true,
  },
})
```

Now, just require the file in the "init.lua" file run ":PackerSync" and restart Neovim. Great, we just added a new plugin. The
process is mostly the same for all additional plugins that you may want.

## Plugins to Consider

1. https://github.com/neovim/nvim-lspconfig (Language Server Protocol)
2. https://github.com/hrsh7th/nvim-cmp (Autocomplete)
3. https://github.com/nvim-telescope/telescope.nvim (Fuzzy File Finder with a lot more options)
4. https://github.com/nvim-lualine/lualine.nvim-cmp (Status line)
5. https://github.com/nvim-treesitter/nvim-treesitter (Better syntax highlighting, language parser)
6. https://github.com/mfussenegger/nvim-dap (Debugger Adapter Protocol, vimspector is another option)

There are many more plugins out there. You can find the plugins that I use on my
[GitHub](https://github.com/BKM99/configs/tree/main/editor/nvim).
