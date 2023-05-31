/// <reference types="cypress"/>

describe('Elelemntos basicos', () =>{
  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
  })

  it('Delay', () =>{
    cy.get('#novoCampo')
      .should('not.exist')
    cy.get('#buttonDelay')
      .click()

    cy.get('#novoCampo')
      .should('exist')
      .type('Dianine')
    
  })

})