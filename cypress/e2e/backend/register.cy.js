describe('BackEnd Tests Register', () => {
    const baseUrl = 'http://localhost:3000'

    beforeEach(() => {
        cy.fixture('register').as('registerData')
    })

    it('should register a user', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: this.registerData.validUser,
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
    it('should fail when the name is missing', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: this.registerData.missingName,
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
    it('should fail when the email is missing', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: this.registerData.missingEmail,
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
    it('should fail when the password is missing', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/register/`,
            body: this.registerData.missingPassword,
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
