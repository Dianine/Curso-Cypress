/// <reference types="cypress"/>

/*
it.skip = teste não executa
describe.skip = grupo de teste não executa
*/

//Testes unitários
it('Nome do teste', ()=> {

})


//Grupa testes
describe('Grupo de testes', () => {
  describe('Grupo de testes especificos', ()=> {
    it('Teste especifico 01 ', ()=> {

    })
  })
  describe('Grupo de testes especificos', ()=> {
    it('Teste especifico 02 ', ()=> {

    })
  })
  it('Teste 1 do grupo', ()=> {

  })
})