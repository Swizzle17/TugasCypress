describe('Invalid Login', () => {
    it('Incorrect Email', () => {
        cy.visit('https://kasirdemo.belajarqa.com')

        cy.contains('email').click()

        cy.url().should('include','/login')

        cy.get('#email')
            .type('swizzle@gmail.com')
            .should('have.value', 'swizzle@gmail.com')

        cy.get('#password')
            .type('swizzzzzzzzzzzzzzzzz')
            .should('have.value', 'swizzzzzzzzzzzzzzzzz')

        cy.get('button[type="submit"]').click()

        cy.get('.chakra-alert')
    })
})