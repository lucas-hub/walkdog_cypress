describe('Teste experimental site Walkdog', () => {

  beforeEach(()=> {
    cy.visit('walkdog.vercel.app/')
  })

  const landingPageText = 'Quer gerar uma renda extra passeando com pets? Faça parte da nossa comunidade de dog walkers.'

  it('Visits the landing page and checks the main informations', () => {
    cy.get('main').should('contain', landingPageText)
    cy.get('a').should('be.visible')
  })

  it('Clicks on the button and goes to the register page', ()=> {
    cy.get('a').click()

  })
})