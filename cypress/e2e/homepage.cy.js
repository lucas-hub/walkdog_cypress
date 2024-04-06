describe('Teste experimental site Walkdog', () => {

  beforeEach(()=> {
    cy.visit('https://walkdog.vercel.app')
  })

  const landingPageText = 'Quer gerar uma renda extra passeando com pets? Faça parte da nossa comunidade de dog walkers.'
  const nameText = Cypress._.repeat('Lucas', 50)

  it('Visits the landing page and checks the main informations', () => {
    cy.get('main').should('contain', landingPageText)
    cy.get('a').should('be.visible')
  })

  it('Clicks on the button and goes to the register page', ()=> {
    cy.get('a').click()
    cy.url().should('be.equal', 'https://walkdog.vercel.app/signup')

    cy.get('input[name="name"]').type('Lucas').should('have.value','Lucas')
  })
})