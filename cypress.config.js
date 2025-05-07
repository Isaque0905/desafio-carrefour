const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
  
    }
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/test-output-[hash].xml',
    toConsole: true,
    attachments: true
  }
});
