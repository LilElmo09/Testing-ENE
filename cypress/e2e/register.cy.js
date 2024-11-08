describe('Login Test', () => {
    const url = 'http://localhost:3001/registro'
    let nombre
    let apellido
    let email
    let contrasena
    let emailmalo

    before(() => {
        cy.fixture('data.json').then((data) => {
            email = data.email
            contrasena = data.contrasena
            nombre = data.nombre
            apellido = data.apellido
            emailmalo = data.emailmalo
        })
    })

    it('Check that the error appears for empty fields', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Registrar')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .invalid-feedback')
            .should('be.visible')
            .and('contain', 'El nombre es obligatorio')
        cy.get(':nth-child(2) > .invalid-feedback')
            .should('be.visible')
            .and('contain', 'El apellido es obligatorio')
        cy.get(':nth-child(3) > .invalid-feedback')
            .should('be.visible')
            .and('contain', 'El email es obligatorio')
        cy.get(':nth-child(4) > .invalid-feedback')
            .should('be.visible')
            .and('contain', 'La contraseña es obligatoria')
    })

    it('Check that the error appears for the bad email', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Registrar')
        cy.get(':nth-child(3) > .form-control').type(emailmalo)
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .invalid-feedback')
            .should('be.visible')
            .and('contain', 'El formato de email no es válido')
    })

    it('Check that the user is created correctly', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Registrar')
        cy.get(':nth-child(1) > .form-control').type(nombre)
        cy.get(':nth-child(2) > .form-control').type(apellido)
        cy.get(':nth-child(3) > .form-control').type(email)
        cy.get(':nth-child(4) > .form-control').type(contrasena)
        cy.get('.btn').click()
        //Hacer la comprobacion en futura version
        cy.get('.swal2-popup')
            .should('be.visible')
            .and('contain', 'Usuario registrado correctamente.')
        cy.url().should('eq', 'http://localhost:3000/login')
    })

    it('Check that the user already exists', () => {
        cy.visit(url)
        //cy.title().should('eq', 'Registrar')
        cy.get(':nth-child(1) > .form-control').type(nombre)
        cy.get(':nth-child(2) > .form-control').type(apellido)
        cy.get(':nth-child(3) > .form-control').type(email)
        cy.get(':nth-child(4) > .form-control').type(contrasena)
        cy.get('.btn').click()
        //Hacer la comprobacion en futura version
        cy.get('.swal2-popup')
            .should('be.visible')
            .and('contain', 'Error al registrar el usuario.')
        cy.url().should('eq', url)
    })
})
