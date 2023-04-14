module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': 'off',
    'no-console': 'off',
    'react/button-has-type': 'off',
    'tjsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'ntimport/extensions': 'off',
  },
};
