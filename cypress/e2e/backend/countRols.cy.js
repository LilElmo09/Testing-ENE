describe('Count rol', () => {
    before(() => {
        cy.fixture('roles.json').then((roles) => {
            cy.wrap(roles).as('roles')
        })
    })

    it('Count rol', () => {
        cy.request('GET', 'http://localhost:3000/get-roles/').then(
            (response) => {
                cy.log(JSON.stringify(response.body, null, 2))
                expect(response.status).to.eq(200)
                cy.get('@roles').then((roles) => {
                    const roleNames = response.body.map((role) => role.nombre)
                    expect(roleNames).to.deep.equal(roles.roles)
                })
            }
        )
    })
})
