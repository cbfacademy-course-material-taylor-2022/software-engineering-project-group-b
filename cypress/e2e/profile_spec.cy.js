describe('Profile', () => {
    it('should display the Profile page', () => {
        cy.visit('/')
        cy.contains('h1', 'Profile')
    })
    
    it('signup button should have a link to the thanks page', () => {
        cy.visit('/')
        cy.get('button').click()
        cy.url().should('include', '/Thanks')
    })
    })
    