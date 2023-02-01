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

    it('should display the navigation bar', () => {
        cy.visit('/')
        cy.get('nav').should('be.visible')
    })
    
    it('should display the list of names on signature', () => {
        cy.visit('/')
        cy.get('ul').should('be.visible')
    })
})

