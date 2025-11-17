const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Screenshot overwrite fix
      on("before:browser:launch", () => {
        Cypress.Screenshot.defaults({
          overwrite: false,
        });
      });

      return config;
    },
  },
});
