module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['./tests/setup.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/assets',
    '/src/styles',
    '/tests/utils.js',
    '.stories.js$',
    'main.js',
    'App.vue',
  ],
  collectCoverageFrom: ['src/components/**/*.{js,vue}', '!**/node_modules/**'],
  testMatch: ['**/unit/**/*.spec.js'],
  transformIgnorePatterns: ['/node_modules/(?!vuetify)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
