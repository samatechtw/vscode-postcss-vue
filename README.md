# postcss-vue

### Update Jan. 8, 2023

⚠️ This plugin is deprecated ⚠️

Volar works well with `cpylua.language-postcss`, unless it breaks in the future this plugin will not be maintained or improved.

## Overview

Syntax highlighting, code completion, and error checking in Vue SFCs with Postcss.

> :warning: This extension is experimental, immature, and not recommended for use

## Features

**Core**
- [ ] Vue Single File Component (SFC) PostCSS syntax highlighting
  - [x] Basic CSS highlighting
  - [x] Variables, at-rules (mixins, if, function, etc)
  - [ ] Testing
  - [ ] Module support
- [ ] SFC PostCSS error checking/lint
- [ ] SFC PostCSS code completion (including variables in modules)

**Nice to have**
- [ ] Support core features in standalone files
  - [x] Basic CSS highlighting
  - [x] Variables, at-rules (mixins, if, function, etc)
  - [ ] Testing
  - [ ] Module support
- [ ] Show variable values on hover/jump on cmd click

## Requirements

This extension is built and tested using the latest `@vue/compiler-sfc` package, in with Vue3 projects that use only PostCSS in `<style>` blocks. Other use cases are not supported, but feel free to open an issue/PR.

## Extension Settings

* `postcssVue.enable`: enable/disable this extension

## Notes

Publish doesn't work at the moment with PNPM: https://github.com/microsoft/vscode-vsce/issues/421

Use the following procedure as a temporary workaround (this example creates a local package):
```bash
rm -rf node_modules
npm i
npx vsce package
```
