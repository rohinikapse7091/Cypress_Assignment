/// <reference types="cypress" />

describe('UI Automation Tests', () => {

  // 1. TEXT FIELD FORM INTERACTION
  it('Text fields — enter and validate values', () => {
    cy.visit('https://mui.com/material-ui/react-text-field/')

    cy.get('main').should('exist')

    cy.get('input')
      .filter(':visible')
      .then(($inp) => {
        expect($inp.length).to.be.gte(3)

        const name = 'Rohini'
        const email = 'om@example.com'
        const num = '123'

        cy.wrap($inp.eq(0)).clear().type(name).should('have.value', name)
        cy.wrap($inp.eq(1)).clear().type(email).should('have.value', email)
        cy.wrap($inp.eq(2)).clear().type(num).should('have.value', num)
      })
  })

  // 2. DROPDOWN (MUI SELECT)
  it('Dropdown — select value', () => {
    cy.visit('https://mui.com/material-ui/react-select/')

    cy.get('main').should('exist')

    cy.get('[role="button"]')
      .filter(':visible')
      .first()
      .as('dropdown')

    cy.get('@dropdown').click()

    cy.get('ul li')
      .filter(':visible')
      .eq(1)
      .click()
      .invoke('text')
      .then((txt) => {
        cy.get('@dropdown').should('contain.text', txt.trim())
      })
  })

  // 3. AUTOCOMPLETE
  it('Autocomplete — type + select suggestion', () => {
    cy.visit('https://mui.com/material-ui/react-autocomplete/')

    cy.get('input')
      .filter(':visible')
      .first()
      .as('auto')

    cy.get('@auto').type('a')

    cy.get('ul li')
      .filter(':visible')
      .first()
      .click()

    cy.get('@auto').should('not.have.value', '')
  })

  // 4. TABLE TEST
  it('Table — read rows & validate data', () => {
    cy.visit('https://mui.com/material-ui/react-table/')

    cy.get('table').first().as('tbl')

    cy.get('@tbl')
      .find('tbody tr')
      .its('length')
      .should('be.gte', 1)

    cy.get('@tbl')
      .find('tbody tr td')
      .first()
      .invoke('text')
      .should('not.be.empty')
  })
})
