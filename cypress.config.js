const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    apiTestToken: import.meta.env.VITE_API_TEST_TOKEN,
  },
  projectId: '',
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./tests/e2e/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/e2e/specs/**/*.{feature,features}',
    supportFile: 'tests/e2e/support/index.js',
  },
  videosFolder: 'tests/e2e/videos',
  video: false,
})
