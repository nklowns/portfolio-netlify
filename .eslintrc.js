const switchErrorOrOff = value => (value ? 'error' : 'off')

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
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      '<template>': 'espree',
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-console': switchErrorOrOff(process.env.NODE_ENV === 'production'),
    // allow async-await
    'no-global-assign': 'error',
    'generator-star-spacing': 'off',
    'no-var': 'error',
    semi: 'off',
    // allow debugger during development
    'no-debugger': switchErrorOrOff(
      process.env.NODE_ENV === 'production' ||
        process.env.NODE_ENV === 'staging'
    ),
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
