const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://web.vepaar.com/',
    setupNodeEvents(on, config) {
    },
    video:false,
  },
});



