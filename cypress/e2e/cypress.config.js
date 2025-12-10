const { defineConfig } = require('cypress_assignment')

module.exports = defineConfig({
  assignment: {
    setupNodeEvents(on, config) {
      return config
    },
    defaultCommandTimeout: 8000,
    baseUrl: '',
    specPattern: 'cypress_assignment/assignment/**/*.cy.js'
  }
})

