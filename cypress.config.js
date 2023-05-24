const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://web.vepaar.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here 
      //  require('d:/IntegrateJenkinsAndGit/cypress/plugins')(on);
    },
    video:false,
  },
});



