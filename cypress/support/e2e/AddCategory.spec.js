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

        cy.url().should('include','/dashboard')

        cy.get('[href="/categories"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()

        cy.get('.css-1piskbq').click()

        cy.get('#nama').type('Makanan')

        cy.get('#deskripsi').type('Makanan')
        
        cy.get('.chakra-button').click()

        cy.contains('Makanan')
    })

})