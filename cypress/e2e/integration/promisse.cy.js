it('Sem teste, ainda', () => {})

const getSomeThing = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
          resolve(15)
    }, 3000)
  })
}

const system = async () => {
  console.log('init')
  const some = await getSomeThing()
    console.log(`SomeThing is ${some}`)
    console.log('End')
  }

system()