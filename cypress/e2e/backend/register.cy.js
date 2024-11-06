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
                creado_en: '2024-11-05',
                actualizado_en: '2024-11-05',
                activo: true,
                apellido: 'Santander',
            },
            failOnStatusCode: false,
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property(
                'message',
                'User registered successfully'
            )
        })
    })
})
