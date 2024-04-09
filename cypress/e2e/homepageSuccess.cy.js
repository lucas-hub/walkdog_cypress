/// <reference types="Cypress" />

describe('Teste experimental site Walkdog', () => {

  beforeEach(() => {
    cy.visit('https://walkdog.vercel.app')
  })

  const landingPageText = 'Quer gerar uma renda extra passeando com pets? Faça parte da nossa comunidade de dog walkers.'
  const nameText = Cypress._.repeat('Lucas', 50)

  it('Visits the landing page, enters the form page and fill it in correctly', () => {
    cy.get('main').should('contain', landingPageText)
    cy.get('a').should('be.visible')
  })

  it('Clicks on the button and goes to the register page', () => {
    cy.get('a').click()
    cy.url().should('be.equal', 'https://walkdog.vercel.app/signup')

    cy.get('input[name="name"]').type('Lucas').should('have.value', 'Lucas')
    cy.get('input[name="email"]').type('Lucas@gmail.com').should('have.value', 'Lucas@gmail.com')
    cy.get('input[name="cpf"]').type('11111122222').should('have.value', '11111122222')

    cy.get('input[name="cep"]').type('04102010').should('have.value', '04102010')
    cy.get('input[name="addressNumber"]').type('10').should('have.value', '10')
    cy.get('input[value="Buscar CEP"]').click()
    cy.get('input[name="addressStreet"]').should('have.value', 'Rua Desembargador Aragão')
    cy.get('input[name="addressDistrict"]').should('have.value', 'Vila Mariana')
    cy.get('input[name="addressCityUf"]').should('have.value', 'São Paulo/SP')

    cy.contains('span', 'Cuidar').click()
    cy.get('input[type="file"]').invoke('show').click().selectFile('cypress/fixtures/teste.png').should(($input) => {
      expect($input[0].files[0].name).to.equal('teste.png')
    }).should('have.length', 1)
    cy.get('.button-register').click()

    cy.get('.swal2-popup').should('be.visible')
    cy.get('.swal2-confirm').click()

    cy.get('main').should('contain', landingPageText)
  })
})