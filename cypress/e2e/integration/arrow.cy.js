it('nada agora', function(){})

//function soma(a, b){
//  return a + b;
//}

//const soma = function (a, b) {
//  return a + b;
//}

const soma = (a,  b) => {
  return a * b;
}

console.log(soma(2,8))


it('a function test', function(){
  console.log('function', this)
})