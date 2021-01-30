# textlint-rule-spelling [![Build Status](https://dev.azure.com/ta2gch/ta2gch/_apis/build/status/ta2gch.textlint-rule-spelling?branchName=master)](https://dev.azure.com/ta2gch/ta2gch/_build/latest?definitionId=3&branchName=master)

A textlint rule for spelling of languages as much as possible

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-spelling dictionary-en # or dictionary-fr, ...

The dictionaries are available at [wooorm/dictionaries](https://github.com/wooorm/dictionaries)

## Usage

### Via `.textlintrc`(Recommended)

```jsonc
{
    "rules": {
        "spelling": {
            "language": "en",
            "skipPatterns": ["JavaScript"],
            "wordDefinitionRegexp": "/[\\w']+/g",
            "suggestCorrections": true,
        }
    }
}
```

#### config

##### config.language

Optional. Default value is `en` and defines the suffix of the dictionary to look for. Example: `en` means lookup [`dictionary-en`](https://www.npmjs.com/package/dictionary-en) which you should have installed with npm.

##### config.skipPatterns

Optional. This can be a mix of strings and regular expressions. Normal words like `"npm"` will be transformed t a RegExp of format `/npm/g`. But you can also enter a RegExp string directly like: `"/\\bnpm\\b/g"` if you want to only match the full word.

##### config.wordDefinitionRegexp

Optional. You should override this if you notice an issue for your language. The default works for *en*.

```javascript
     /[\w']+/g
```

##### config.suggestCorrections

Optional(Default), disabling this removes word suggestions and quick fixes, but you gain an order of magnitude speed improvement. Mostly useful for live feedback loops.

### Via CLI

```
textlint --rule spelling README.md
```

## Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

## Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

## License

GPL-3.0-or-later © TANIGUCHI Masaya
