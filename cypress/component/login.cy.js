import React from 'react'
import { mount } from 'cypress/react'
import Login from 'FrontEnd-ENE/client/src/components/Login/Login.jsx'

describe('Component Login', () => {
    cy.log(console.error())
    it('renders correctly', () => {
        mount(<Login />)
    })
})
