/// <reference types="cypress" />

describe('API Tests (ReqRes)', () => {
  const base = 'https://reqres.in/api'

 
  it('POST — Create user', () => {
    cy.request('POST', `${base}/users`, {
      name: 'Om',
      job: 'Cypress Intern'
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id')
      expect(res.body).to.have.property('createdAt')
    })
  })

 
  it('GET — List users', () => {
    cy.request(`${base}/users?page=2`).then((res) => {
      expect(res.status).to.eq(200)

      res.body.data.forEach((u) => {
        expect(u.email).to.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
      })
    })
  })

  
  it('PUT — Update user', () => {
    cy.request('PUT', `${base}/users/2`, {
      name: 'Updated',
      job: 'Updated Job'
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('updatedAt')
    })
  })

 
  it('DELETE — delete user', () => {
    cy.request('DELETE', `${base}/users/2`).then((res) => {
      expect(res.status).to.eq(204)
    })
  })
})
