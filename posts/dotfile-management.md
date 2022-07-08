---
title: 'Dotfile Management'
date: 'July 1, 2022'
excerpt: 'This post will cover how I manage my dotfiles, what symlinks are, and Dotbot.'
cover_image: '/images/posts/dotfile-cover.png'
---

## What are dotfiles?

Dotfiles are files/directories that begin with a period. If you go into your terminal and change directories to $HOME and type the
command "ls -a". This command will list dotfiles along with your regular files and directories. Dotfiles are sometimes called "hidden files"
because they are hidden from the user. On macOS, if you open finder and hit "cmd + shift + ." it will show your dotfiles. Dotfiles are used
to manage system and application configuration settings. For example, vim (a text editor) uses a file called the ".vimrc" file to manage the
settings for that program.

Once you start to have more and more dotfiles it can get difficult to manage them. Furthermore, if you need to set up these programs on a
different computer or server it would be very tedious and inefficient to copy and paste the contents of those files to a different
computer. There are programs like GNU stow which provide a way to use symlinks to manage these types of files. For this tutorial, I will not use
GNU stow, rather I will be using [Dotbot](https://github.com/anishathalye/dotbot) (I think Dotbot is simpler and easier to use than stow).

## What are Symlinks?
A symlink aka symbolic link is a file that contains a reference to another file or directory. Basically, you can create a symlink for
“$HOME/file1.txt” and have a reference to that file in some other directory like “$HOME/some/other/dir/file1_symlink.txt”. When you edit the
original file or the symlinked file both are modified in the same way. But, be careful when you delete the original file because that can
create a dead symlink. The command for creating a symlink is “ln -s /path/to/file /path/to/symlink”. Symlinks are very useful for managing
files that can be scattered all over your computer. Dobot is a useful tool to help manage symlinks (GNU stow is another option).

## Using Dotbot with GitHub to manage your dotfiles
First, let's start off by creating a new directory. You can name it whatever you want. I named mine “configs” and placed it in my home
directory.

```
mkdir configs
```

This directory is where you will place the dotfiles and other configuration files that you want to manage with Dotbot. These files/directories can include, but are not limited to bashrc, zshrc, vimrc, tmux, gitconfig, etc. Simply put, this directory will store the dotfiles that you want to manage. They will all be in one place to make it more convenient.

Next, we will setup Dotbot. These commands were taken directly from the Dotbot GitHub repo.

```
cd ~/configs # replace with the path to your dotfiles
git init # initialize repository if needed
git submodule add https://github.com/anishathalye/dotbot
git config -f .gitmodules submodule.dotbot.ignore dirty # ignore dirty commits in the submodule
cp dotbot/tools/git-submodule/install .
touch install.conf.yaml
```
Now that Dotbot is installed, all we need to do is edit “install.conf.yaml”. This is the example from the GitHub repo. There are more
things you can configure with Dotbot but that is out of the scope of this tutorial.

```
- defaults:
    link:
      relink: true

- clean: ['~']

- link:
    path/to/place/where/you/want/to/symlink: path/to/file/inside/of/this/directory
    path/to/place/where/you/want/to/symlink: path/to/file/inside/of/this/directory
    path/to/place/where/you/want/to/symlink: path/to/file/inside/of/this/directory


- shell:
    - [git submodule update --init --recursive, Installing submodules]
```

Great, your dotfiles are now bootstrapped! You can push this git repo to GitHub and if you are using a new computer just clone the repo
and run the "./install" script to symlink all your dotfiles.
