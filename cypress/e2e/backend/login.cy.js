describe('BackEnd Tests Login', () => {
    const baseUrl = 'http://localhost:3000'

    it('should login a user', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login/`,
            body: {
                email: 'jim@example.com',
                contraseña: 'password123',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
        })
    })
})
