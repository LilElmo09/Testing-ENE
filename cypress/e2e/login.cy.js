describe('Login Test', () => {
    const url = 'http://localhost:3001/ingresar'
    let email
    let contrasena
    let nombre

    before(() => {
        cy.fixture('data.json').then((data) => {
            email = data.email
            contrasena = data.contrasena
            nombre = data.nombre
        })
    })

    it.only('should successfully log in with valid credentials', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Ingresar')
        cy.get('#email').should('be.visible').type(email)
        cy.get('#contraseña').should('be.visible').type(contrasena)
        cy.get('.btn').click()
        cy.get('.swal2-popup')
            .should('be.visible')
            .and('contain', 'Inicio de sesión exitoso')
        cy.url().should('not.eq', url)
        cy.get('.user-info').should('be.visible').and('contain', nombre)
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
            .and('contain', 'El correo es obligatorio')
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
