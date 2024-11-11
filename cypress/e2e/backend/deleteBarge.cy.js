describe('Eliminar rol de usuario', () => {
    it('Debería eliminar un rol de un usuario', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/delete-barge/3', // Reemplazar con un usuario_id válido
            body: {
                rol_id: 1, // Reemplazar con un rol_id válido
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Debería saltar un error por que el usuario no exsiste', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/delete-barge/100', // Reemplazar con un usuario_id válido
            body: {
                rol_id: 1, // Reemplazar con un rol_id válido
            },
        }).then((response) => {
            expect(response.status).to.eq(500)
        })
    })
})
