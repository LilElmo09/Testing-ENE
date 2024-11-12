describe('addRole', () => {
    it('should add a role to a user', () => {
        cy.request('POST', 'http://localhost:3000/admin/add-role/:usuario_id', {
            id: 123,
            rol_id: 1,
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})
