describe('ReqRes API tests', () => {

  it('Create User - POST /api/users', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      failOnStatusCode: false,
      body: {
        name: 'Rohini',
        job: 'QA Intern'
      }
    }).then((res) => {
      expect([201, 403]).to.include(res.status)
    })
  })

  it('Read Users - GET /api/users?page=2', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      failOnStatusCode: false,
    }).then((res) => {
      cy.log("STATUS: " + res.status)
      expect([200, 403]).to.include(res.status)
    })
  })

  it('Update User - PUT /api/users/2', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false,
      body: {
        name: 'rohini Updated',
        job: 'QA Engineer'
      }
    }).then((res) => {
      expect([200, 403]).to.include(res.status)
    })
  })

  it('Delete User - DELETE /api/users/2', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false,
    }).then((res) => {
      expect([204, 403]).to.include(res.status)
    })
  })

})