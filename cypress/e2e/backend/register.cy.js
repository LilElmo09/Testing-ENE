describe('BackEnd Tests Register', () => {
    const baseUrl = 'http://localhost:3000'

    it('should register a user', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: {
                nombre: 'Jim',
                email: 'jim@example.com',
                contraseña: 'password123',
                apellido: 'Santander',
            },
            failOnStatusCode: false,
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property(
                'message',
                'User registered successfully'
            )
        })
    })
    it('should fail when the name is missing', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: {
                email: 'jim@example.com',
                contraseña: 'password123',
                apellido: 'Santander',
            },
            failOnStatusCode: false,
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property(
                'message',
                'null value in column "nombre" of relation "usuarios" violates not-null constraint'
            )
        })
    })
    it('should fail when the email is missing', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: {
                nombre: 'Jim',
                contraseña: 'password123',
                apellido: 'Santander',
            },
            failOnStatusCode: false,
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property(
                'message',
                'null value in column "email" of relation "usuarios" violates not-null constraint'
            )
        })
    })
    it('should fail when the password is missing', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: {
                nombre: 'Jim',
                email: 'jim@example.com',
                apellido: 'Santander',
            },
            failOnStatusCode: false,
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property(
                'message',
                'Illegal arguments: undefined, number'
            )
        })
    })
})
