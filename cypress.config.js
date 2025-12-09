const { defineConfig } = require("cypress");

module.exports = defineConfig({
  assignment: {
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
