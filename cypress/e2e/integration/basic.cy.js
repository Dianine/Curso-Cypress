/// <reference types="cypress"/>

describe('Cypress Basic', () =>{
  
  it.only('Visitar pagina Web e verificar o Título', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

  /*Rodar passo a passo*/
  //cy.pause()

   cy.title().should('be.equal', 'Campo de Treinamento')
   cy.title().should('contain', 'Campo').debug()

   cy.title()
    .should('be.equal','Campo de Treinamento')
    .should('contain','Campo')

  })

  it('Clicar no botão clique-me', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
     .click()
     .should('have.value', 'Obrigado!')
  })

})
