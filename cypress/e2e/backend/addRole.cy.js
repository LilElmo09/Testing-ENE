describe('addRole', () => {
    it('should add a role to a user', () => {
        const usuario_id = 3
        cy.request(
            'POST',
            `http://localhost:3000/admin/add-role/${usuario_id}`,
            {
                id: 3,
                rol_id: 1,
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})
