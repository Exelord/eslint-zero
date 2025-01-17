module.exports = {
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'error',
    indent: ['error', 2],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-between-class-members': 'error',
    'max-depth': 'error',
    'max-len': ['error', { code: 120 }],
    'max-lines': ['error', { skipComments: true, skipBlankLines: true }],
    'max-lines-per-function': ['error', { skipComments: true, skipBlankLines: true }],
    'max-nested-callbacks': 'error',
    'max-params': ['error', { max: 5 }],
    'max-statements': ['error', 15, { ignoreTopLevelFunctions: true }],
    'max-statements-per-line': 'error',
    'multiline-ternary': ['error', 'never'],
    'new-cap': ['error', { properties: false }],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true, minProperties: 3 }
    }],
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' },

      { blankLine: 'always', prev: 'expression', next: '*' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },

      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },

      { blankLine: 'always', prev: ['multiline-const', 'multiline-let', 'multiline-var'], next: '*' },
      { blankLine: 'always', prev: ['multiline-expression', 'multiline-block-like'], next: '*' }],
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'prefer-exponentiation-operator': 'error',

    'capitalized-comments': 'off',
    'func-names': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'error',
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'multiline-comment-style': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-mixed-operators': 'off',
    'no-restricted-syntax': 'off',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'object-property-newline': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'function-call-argument-newline': 'off'
  }
};
