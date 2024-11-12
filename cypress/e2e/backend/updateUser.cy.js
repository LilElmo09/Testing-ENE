describe('Update User API', () => {
    it('should update user details successfully', () => {
        const userId = 1
        const updatedUser = {
            name: 'Updated Name',
            email: 'updatedemail@example.com',
        }

        cy.request(
            'PUT',
            `http://localhost:3001/update-user/${userId}`,
            updatedUser
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', updatedUser.name)
            expect(response.body).to.have.property('email', updatedUser.email)
        })
    })

    it('should return 404 for non-existing user', () => {
        const userId = 999
        const updatedUser = {
            name: 'Non Existing User',
            email: 'nonexisting@example.com',
        }

        cy.request({
            method: 'PUT',
            url: `http://localhost:3001/update-user/${userId}`,
            body: updatedUser,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })

    it('should return 400 for invalid user data', () => {
        const userId = 1
        const invalidUser = {
            name: '',
            email: 'invalidemail',
        }

        cy.request({
            method: 'PUT',
            url: `http://localhost:3001/update-user/${userId}`,
            body: invalidUser,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})
