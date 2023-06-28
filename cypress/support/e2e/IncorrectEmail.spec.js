describe('Invalid Login', () => {
    it('Incorrect Email', () => {
        cy.visit('https://kasirdemo.belajarqa.com')

        cy.contains('email').click()

        cy.url().should('include','/login')

        cy.get('#email')
            .type('swizzz@gmail.com')
            .should('have.value', 'swizzz@gmail.com')

        cy.get('#password')
            .type('swizzle')
            .should('have.value', 'swizzle')

        cy.get('button[type="submit"]').click()

        cy.get('.chakra-alert')
    })
})