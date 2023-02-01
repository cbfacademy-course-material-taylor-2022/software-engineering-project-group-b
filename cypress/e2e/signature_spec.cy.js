describe('Signature', () => {
  it('should display the Signature page', () => {
    cy.visit('/')
    cy.contains('h1', 'Signature')
  })

  it('signup button should have a link to the thanks page', () => {
    cy.visit('/')
    cy.get('button').click()
    cy.url().should('include', '/Thanks')
  })

  it('should display the navigation bar', () => {
    cy.visit('/')
    cy.get('nav').should('be.visible')
  }

  it('should display the signature form', () => {
    cy.visit('/')
    cy.get('form').should('be.visible')
  }
})




// Path: cypress/e2e/about_spec.cy.js
// Compare this snippet from cypress.config.js: