describe('Home', () => {
    it('should display the Home page', () => {
      cy.visit('/')
      cy.contains('h1', 'Home')
    })
  
    it('signup button should have a link to the Signature page', () => {
      cy.visit('/')
      cy.get('button').click()
      cy.url().should('include', '/Signature')
    })

    it('should display the navigation bar', () => {
      cy.visit('/')
      cy.get('nav').should('be.visible')
    } )
  })
  