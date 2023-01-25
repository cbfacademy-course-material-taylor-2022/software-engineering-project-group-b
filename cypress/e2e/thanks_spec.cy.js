describe('thanks', () => {
  it('should display the thanks page', () => {
    cy.visit('/')
    cy.contains('h1', 'Thanks')
  })


it('should have a link to the Signature page', () => {
    cy.visit('/Thanks')
    cy.get('button').click()
    cy.url().should('include', '/')
    
})
})

