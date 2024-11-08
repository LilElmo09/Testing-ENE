describe('Login Test', () => {
    const url = 'http://localhost:3001/ingresar'
    let email
    let contrasena

    before(() => {
        cy.fixture('data.json').then((data) => {
            email = data.email
            contrasena = data.contrasena
        })
    })

    it('should successfully log in with valid credentials', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Ingresar')
        cy.get('#email').should('be.visible').type(email)
        cy.get('#contraseña').should('be.visible').type(contrasena)
        cy.get('.btn').click()
        cy.url().should('not.eq', url)
    })

    it('should detect if email is missing', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Ingresar')
        cy.get('#contraseña').should('be.visible').type(contrasena)
        cy.get('#email').should('be.visible')
        cy.get('.btn').click()
        cy.wait(500)
        cy.get('.invalid-feedback')
            .should('be.visible')
            .and('contain', 'El corro es obligatorio')
    })

    it('should detect if password is missing', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Ingresar')
        cy.get('#email').should('be.visible').type(email)
        cy.get('#contraseña').should('be.visible')
        cy.get('.btn').click()
        cy.wait(500)
        cy.get('.invalid-feedback')
            .should('be.visible')
            .and('contain', 'La contraseña es obligatoria')
    })
})
