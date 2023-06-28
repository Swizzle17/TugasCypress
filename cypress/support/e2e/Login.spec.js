describe('Login', () => {
    it('Login Kasir Aja', () => {
        cy.visit('https://kasirdemo.belajarqa.com')

        cy.contains('email').click()

        cy.url().should('include','/login')

        cy.get('#email')
            .type('swizzle@gmail.com')
            .should('have.value', 'swizzle@gmail.com')

        cy.get('#password')
            .type('swizzle')
            .should('have.value', 'swizzle')

        cy.get('button[type="submit"]').click()

    })
})