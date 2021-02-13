module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};
