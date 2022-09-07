---
title: 'My Note Taking Setup'
date: 'September 6, 2022'
excerpt: 'This post will go over the apps and tools I use to take efficient and organized notes in markdown.'
cover_image: '/images/posts/note-taking.jpeg'
---

## Overview of my setup

I use neovim to write all of my notes in markdown and then use Obsidian to view and search my notes.

1. Neovim (with some plugins)
    - [jakewvincent/mkdnflow.nvim](https://github.com/jakewvincent/mkdnflow.nvim)
    - [preservim/vim-markdown](https://github.com/preservim/vim-markdown)
    - [dhruvasagar/vim-table-mode](https://github.com/dhruvasagar/vim-table-mode)
    - [mzlogin/vim-markdown-toc](https://github.com/mzlogin/vim-markdown-toc)
    - [dkarter/bullets.vim](https://github.com/dkarter/bullets.vim)
    - [AckslD/nvim-FeMaco.lua](https://github.com/AckslD/nvim-FeMaco.lua)
    - [mickael-menu/zk-nvim](https://github.com/mickael-menu/zk-nvim)
    - [iamcco/markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)
2. [zk](https://github.com/mickael-menu/zk)
3. [Obsidian](https://obsidian.md/)

## What is Zettlekasten?

Simply put, Zettlekasten is a way of organizing your notes by creating a interconnected web/graph using metadata like tags and subject headings. Being able to group your notes based on metadata creates a powerful way of relating other ideas and thoughts together.

## Why use Markdown?

I use markdown because it makes writing professional and organized documents easy. Due to markdown and its simplistic nature it reduces your cognitive load when it comes to formatting and aesthetics. Markdown can also be converted to other formats including PDF and HTML. You might want to look at [Pandoc](https://pandoc.org/) for that.

## Neovim Markdown Plugins

Neovim has many plugins you can install makes writing markdown documents easy. Below will be a list of the plugins I use and brief explanation of what they do.

- "jakewvincent/mkdnflow.nvim" allows you to follow links in markdown files by pressing &lt;Enter&gt; to follow and &lt;Delete&gt; to go back.
- "preservim/vim-markdown" gives better syntax highlighting, supports folds, and is able to conceal text.
- "dhruvasagar/vim-table-mode" makes it extremely easy to create and align tables in markdown.
- "mzlogin/vim-markdown-toc" gives you easy to use functions to generate the table of contents.
- "dkarter/bullets.vim" makes it easier to write ordered, unordered, and todo lists.
- "AckslD/nvim-FeMaco.lua" is a plugin used to make it easier to write code blocks in markdown. This plugins creates a temporary file in a new buffer that supports things like LSPs, autocomplete, etc (if you have it set up correctly). Using vim's command mode you can even run the code block if you want.
- "mickael-menu/zk-nvim" this last plugin I use was made to be able to interact with "zk" through neovim.

## Micheal Menu's ZK

[Zk](https://github.com/mickael-menu/zk) is a program that allows you to create Zettlekasten based notes in the terminal. This program has an easy to set up configuration file in TOML and supports things like tags, searching, templates, and much more. You are able to use other programs like [fzf](https://github.com/junegunn/fzf) and [bat](https://github.com/sharkdp/bat) to make it easier to look through your notes. The creator of zk also built a neovim plugin called [zk-nvim](https://github.com/mickael-menu/zk-nvim) that allows you to interface with zk through neovim.

## Obsidian

[Obsidian](https://obsidian.md/) is a free markdown editor that uses Zettlekasten as a framework for managing and organizing your notes. Even though I do not need Obsidian for my note taking setup, I really like the UI, visualizations, and overall format of the markdown documents.

## Summary

I write my markdown documents/notes in neovim and then visualize and study them using Obsidian. My workflow whether I am taking notes or writing code always involves the terminal. Being able to have a streamlined note taking set up with neovim, the terminal, and Obsidian makes it very simple to take quick and organized notes.
