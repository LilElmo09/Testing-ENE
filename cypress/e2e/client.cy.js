describe('e2e client', () => {
    const url = 'http://localhost:3001'
    let email
    let contrasena
    let nombre
    let adminemail
    let admincontrasena

    before(() => {
        cy.fixture('data.json').then((data) => {
            email = data.email
            contrasena = data.contrasena
            nombre = data.nombre
            adminemail = data.adminemail
            admincontrasena = data.admincontrasena
        })
    })
    it('Inicio de cliente', () => {
        cy.visit(url)
        cy.get('.ingresar').click()
        cy.get('#email').type(email)
        cy.get('#contraseña').type(contrasena)
        cy.get('.btn').click()
        cy.get('.swal2-popup')
            .should('be.visible')
            .and('contain', 'Inicio de sesión exitoso')
        cy.url().should('eq', 'http://localhost:3001/dashboard-cliente')
    })

    it('Login de admin', () => {
        cy.visit(url)
        cy.get('.ingresar').click()
        cy.get('#email').type(adminemail)
        cy.get('#contraseña').type(admincontrasena)
        cy.get('.btn').click()
        cy.get('.swal2-popup')
            .should('be.visible')
            .and('contain', 'Inicio de sesión exitoso')
        cy.url().should('eq', 'http://localhost:3001/role-selection')
        cy.get('.margen').should('contain', 'Administrador')
        cy.get('.margen').should('contain', 'Finanzas')
        cy.get('.margen').should('contain', 'Cocina')
        cy.get('.margen').should('contain', 'Bodega')
        cy.get('.margen').should('contain', 'Cliente')
    })
})
