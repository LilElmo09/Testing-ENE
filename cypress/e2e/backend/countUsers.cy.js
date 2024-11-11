describe('Count Users', () => {
    let rolesCount
    let TOTAL
    let activos
    let inactivos

    before(() => {
        cy.fixture('rolesCount.json').then((data) => {
            rolesCount = data
            TOTAL = (rolesCount.admin + rolesCount.user).toString()
            activos = rolesCount.activos.toString()
            inactivos = rolesCount.inactivos.toString()
        })
    })

    it('should count the number of users', function () {
        cy.request('GET', 'http://localhost:3000/count-users').then(
            (response) => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                expect(response.body.activos).to.eq(activos)
                expect(response.body.inactivos).to.eq(inactivos)
                expect(response.body.total).to.eq(TOTAL)
            }
        )
    })
})
