/// <reference types="Cypress" />

describe('Teste experimental site Walkdog', () => {

    beforeEach(() => {
        cy.visit('https://walkdog.vercel.app')
    })

    const landingPageText = 'Quer gerar uma renda extra passeando com pets? Faça parte da nossa comunidade de dog walkers.'

    it('Visits the landing page', () => {
        cy.get('main').should('contain', landingPageText)
        cy.get('a').should('be.visible')
    })

    it('Enters the form page and fill it in incorrectly', ()=> {
        cy.get('a').click()
        cy.url().should('be.equal', 'https://walkdog.vercel.app/signup')

        cy.get('input[name="name"]').type('Lucas').should('have.value', 'Lucas')
        cy.get('input[name="email"]').type('Lucas@.com').should('have.value', 'Lucas@.com')
        cy.get('input[name="cpf"]').type('aaa').should('have.value', 'aaa')

        cy.get('input[name="cep"]').type('1').should('have.value', '1')
        cy.get('input[name="addressNumber"]').type('0').should('have.value', '0')
        cy.get('input[value="Buscar CEP"]').click()

        cy.contains('span', 'Adestrar').click()
        cy.get('.button-register').click()

        cy.contains('span', 'Informe um email válido').should('be.visible')
        cy.contains('span', 'CPF inválido').should('be.visible')

        cy.contains('span', 'Informe um CEP válido').should('be.visible')
        cy.contains('span', 'Informe um número maior que zero').should('be.visible')

        cy.contains('span', 'Adcione um documento com foto (RG ou CHN)').should('be.visible')
    })
})