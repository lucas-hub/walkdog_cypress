/// <reference types="Cypress" />

describe('Teste experimental site Walkdog', () => {

    beforeEach(() => {
        cy.visit('https://walkdog.vercel.app')
    })

    const landingPageText = 'Quer gerar uma renda extra passeando com pets? Faça parte da nossa comunidade de dog walkers.'

    it('Visits the landing page, enters the form page and fill it in incorrectly', () => {

    })
})