const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  viewportWidth: 1280,
  viewportHeight: 800,
  fixturesFolder: 'cypress/fixtures',
  reporter: 'cypress-multi-reporters',
  retries: 2,
  reporterOptions: {
    reporterEnabled: 'spec, mochawesome, mocha-junit-reporter',
    cypressSonarqubeReporterReporterOptions: {
      outputDir: 'reports',
      overwrite: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/[hash].junit.xml',
    },
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      consoleReporter: 'none',
      overwrite: false,
      json: true,
      html: false
    }
  },
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-terminal-report/src/installLogsPrinter')(on, {
        'printLogsToConsole': 'always',
      }); 
      
      on('file:preprocessor', cucumber());
      
    },
    baseUrl: 'http://localhost:8080',
    specPattern: "**/*.feature",
  },
});
