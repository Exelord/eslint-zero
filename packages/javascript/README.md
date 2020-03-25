# @eslint-zero/javascript

A complete ESLint plugin for javascript projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@eslint-zero/javascript`:

```
$ npm install @eslint-zero/javascript --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@eslint-zero/javascript` globally.

## Usage

### Plugin

Add `@eslint-zero/javascript` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": ["@eslint-zero/javascript"],
}
```

### Configs

Add `@eslint-zero/javascript` plugin and extend your config with zero-conifg!

##### Available Configs

- `plugin:@eslint-zero/javascript/browser` - browser config
- `plugin:@eslint-zero/javascript/node` - node.js config

Example:

```json
{
    "plugins": ["@eslint-zero/javascript"],
    "extends": ["plugin:@eslint-zero/javascript/node"]
}
```







