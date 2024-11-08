describe('BackEnd Tests Login', () => {
    const baseUrl = 'http://localhost:3000'

    beforeEach(() => {
        cy.fixture('login').as('loginData')
    })

    it('should login a normal user', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login/`,
            body: this.loginData.normalUser,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            expect(response.body.roles).to.deep.equal(
                this.loginData.normalUser.roles
            )
            expect(response.body.email).to.deep.equal(
                this.loginData.normalUser.email
            )
        })
    })

    it('should login a admin user', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login/`,
            body: this.loginData.adminUser,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            expect(response.body.roles).to.deep.equal(
                this.loginData.adminUser.roles
            )
            expect(response.body.email).to.deep.equal(
                this.loginData.adminUser.email
            )
        })
    })

    it('should login a user without email', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login/`,
            body: this.loginData.userWithoutEmail,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('should login a user without password', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login/`,
            body: this.loginData.userWithoutPassword,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('should login an unregistered user', function () {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login/`,
            body: this.loginData.unregisteredUser,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})
