/// <reference types="cypress"/>


//Comparação
it('Equality', () => {
  const a = 1

  expect(a).equal(1);
  expect(a, 'Deve ser 1').equal(1);
  expect(a).to.be.equal(1);
  expect('a', 'Não pode ser A').not.to.be.equal('b');
})


//Verdadeiro || Falso
it('Truthy', () => {
  const a = true
  const b = null
  let c

  expect (a).to.be.true
  expect (true).to.be.true
  expect (b).to.be.null
  expect(a).to.be.not.null
  expect(c).to.be.undefined

})

//Comparação de Objetos
it('Object Equality', () => {
  const obj ={
    a: 1,
    b: 2
  }

  expect(obj).to.be.equals(obj)
  expect(obj).equals(obj)
  expect(obj).equal(obj)
  expect(obj).eq(obj)

  /*deep: verifica as propriedades do OBJETO*/
  expect(obj).to.be.deep.equal({a:1, b:2})
  expect(obj).eql({a:1, b:2})

  /*Verificar se existe uma propriedade especifica dentro do Objeto*/
  expect(obj).include({a:1})
  expect(obj).to.have.property('b')

  /*Verifica se valor da variavel/prorpiedade está correto*/
  expect(obj).to.have.property('b', 2)

  /*Verifica se objeto NÃO está vazio */
  expect(obj).to.not.be.empty
  expect({}). to.be.empty
})

/*Verificação de Arrays*/
it(' Arrays', () =>{
const arr = [1, 2, 3]

expect(arr).to.have.members([1,2,3])
expect(arr).to.include.members([1,3])
expect(arr).to.not.be.empty
expect([]). to.be.empty
})


/*Verificar tipo*/
it('Types', () => {
  const num = 1
  const str = 'string'

  expect(num).to.be.a('number')
  expect(str).to.be.a('string')
  expect({}).to.be.a('object')
  expect([]).to.be.a('array')
})


it('String', () => {
  const str = 'Isso é um conjunto de caracteres'

  expect(str).to.be.equal('Isso é um conjunto de caracteres')
  expect(str).to.be.have.length(32)
  expect(str).to.be.a('string')

  /*Contem texto na frase*/
  expect(str).to.contains('conjunto')
  expect(str).to.match(/de/)

  /* ^: Frase Inicia com */
  expect(str).to.match(/^Isso/)

  /* $: frase termina com */
  expect(str).to.match(/caracteres$/)

  /*Total de caracteres*/
  expect(str).to.match(/.{32}/)

  /*Se é apenas letras*/
  expect(str).to.match(/\w+/)

/*Se NÂO contem número*/
expect(str).to.not.match(/\d+/)

})

/*Verificar números */
it('Numbers', () => {
  const number = 4
  const floateNumber = 2.2323

  expect(number).to.be.equal(4)

  /*Se number é Menor que 3? */
  expect(number).to.be.above(3)

  /*Se number está ABAIXO de 7? */
  expect(number).to.be.below(8)

  /*Metodo para comparar se ele se aproxima do valor original*/
  expect(floateNumber).to.be.closeTo(2.2, 0.1)
})
