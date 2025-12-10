/// <reference types="cypress" />

describe('End-to-End UI + API Flow', () => {
  const api = 'https://reqres.in/api'

  it('Fill UI + Create user via API + Validate', () => {
    cy.visit('https://mui.com/material-ui/react-text-field/')

    cy.get('input')
      .filter(':visible')
      .then(($i) => {
        const name = 'Rohini_' + Date.now()
        const job = 'Cypress Intern'

        cy.wrap($i.eq(0)).clear().type(name)
        cy.wrap($i.eq(1)).clear().type(job)

        cy.request('POST', `${api}/users`, {
          name,
          job
        }).then((res) => {
          expect(res.status).to.eq(201)
          expect(res.body).to.have.property('id')
          expect(res.body).to.have.property('createdAt')

          cy.wrap($i.eq(0)).should('have.value', name)
          cy.wrap($i.eq(1)).should('have.value', job)
        })
      })
  })
})
