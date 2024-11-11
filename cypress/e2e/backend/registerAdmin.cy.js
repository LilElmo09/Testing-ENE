describe('BackEnd resgister admin', () => {
    const url = 'http://localhost:3000/admin/register/'
    beforeEach(() => {
        cy.fixture('registerAdmin').as('admin')
    })

    it('Usuario que ya esta registrado', function () {
        cy.request({
            method: 'POST',
            url: url,
            body: this.admin.RegisterUser,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.message).to.eq(
                'Illegal arguments: undefined, number'
            )
        })
    })

    it('Usuario nuevo', function () {
        cy.request({
            method: 'POST',
            url: url,
            body: this.admin.happyPath,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Usuario sin rol', function () {
        cy.request({
            method: 'POST',
            url: url,
            body: this.admin.WithoutRole,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.message).to.eq(
                'Illegal arguments: undefined, number'
            )
        })
    })

    it('Usuario sin email', function () {
        cy.request({
            method: 'POST',
            url: url,
            body: this.admin.WithoutEmail,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.message).to.eq(
                'Illegal arguments: undefined, number'
            )
        })
    })

    it('Usuario sin contraseña', function () {
        cy.request({
            method: 'POST',
            url: url,
            body: this.admin.WithoutPass,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.message).to.eq(
                'Illegal arguments: undefined, number'
            )
        })
    })
})
