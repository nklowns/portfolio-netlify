const isProduction = process.env.NODE_ENV === 'production'
const errorOnProduction = isProduction ? 'error' : 'off'

const isStaging = process.env.NODE_ENV === 'staging'
const errorOnStaging = isProduction || isStaging ? 'error' : 'off'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': errorOnProduction,
    // allow async-await
    'no-global-assign': 'error',
    'generator-star-spacing': 'off',
    'no-var': 'error',
    semi: 'off',
    // allow debugger during development
    'no-debugger': errorOnStaging,
  },
  globals: {
    jest: 'readonly',
    it: 'readonly',
    beforeEach: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
  },
  overrides: [
    {
      files: [
        '**/tests/unit/*.spec.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
