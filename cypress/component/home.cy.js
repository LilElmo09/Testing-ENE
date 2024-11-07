import React from 'react'
import { mount } from 'cypress/react'
import Home from '@components/'

describe('Home Component', () => {
    it('renders correctly', () => {
        mount(<Home />)
        cy.get('selector').should('contain', 'expected text')
    })
})
