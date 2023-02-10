module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    'ecmaFeatures': {
    'jsx': true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-router',
    'eslint-plugin-import-helpers',
    'prettier'
  ],
  rules: {
  },
};
