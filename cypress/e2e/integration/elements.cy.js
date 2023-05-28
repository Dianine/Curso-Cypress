/// <reference types="cypress"/>

describe('Elelemntos basicos', () =>{
  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
  })

  it('Buscar por texto na tela', () => {
    cy.get('body').should('contain', 'Cuidado')
    cy.get('span').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it('Links', () => {
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    /*Refresh*/
    cy.reload()
    /*Verificar se não existe ainda o texto voltou como resultado do click anterior*/
    cy.get('#resultado').should('have.not.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })

  it.only('TextFilds', () => {
    cy.get('#formNome').type('Dianine')
    cy.get('#formNome').should('have.value','Dianine')

    cy.get('[data-cy="dataSobrenome"]').type('Costa Viana {backspace} {backspace}')
    cy.get('[data-cy="dataSobrenome"]').should('have.value', 'Costa Viana')

    cy.get('#elementosForm\\:sugestoes')
      .type('Essa é apenas uma frase para testar o texArea com cypress')
      .should('have.value', 'Essa é apenas uma frase para testar o texArea com cypress')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('Banco de dados')
      .should('have.value', 'Banco de dados')

      cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay: 100})
        .should('have.value', 'acerto')
      
  })
})

