import React from 'react'
import { mount } from 'cypress/react'
import Home from 'FrontEnd-ENE/client/src/components/Home/Home.jsx'

describe('Home Component', () => {
    it('renders correctly', () => {
        mount(<Home />)
        cy.get('h1').should('contain', 'Restaurante Siglo XXI')
        cy.get('p').should(
            'contain',
            '¡Bienvenido a nuestro restaurante! Disfruta de los mejores platillos y bebidas en un ambiente agradable y familiar.'
        )
    })
})
