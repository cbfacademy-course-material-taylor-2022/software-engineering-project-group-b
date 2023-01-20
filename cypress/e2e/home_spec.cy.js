describe('Signature', () => {
  it('should display the Signature page', () => {
    cy.visit('/')
    cy.contains('h1', 'Signature')
  })
}

// Path: cypress/e2e/about_spec.cy.js
// Compare this snippet from cypress.config.js: