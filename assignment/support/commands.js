Cypress.Commands.add('fillTextInput', (index, value) => {
  cy.get('input[type="text"], input[type="email"], input:not([type])')
    .filter(':visible')
    .eq(index)
    .clear()
    .type(value)
})
