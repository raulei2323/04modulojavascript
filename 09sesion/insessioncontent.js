console.log("Clase 9 Metodos array")
//?-----------Metodos array------

//?----Push----
// const cosas1 = ['a', 'b', 'c']
// console.log(cosas1)//?el antes
// cosas1.push('z')

// console.log(cosas1)//? el despues
  //?------
  //? Push agrega un elemento, lo empuja digamos
///////
//?-------Pop------

// const cosas2 = ['a', 'b', 'c']
// console.log(cosas2)//?el antes

// cosas2.pop()
// console.log(cosas2)//?El despues
//? Pop quita el ultimo elemento de la lista para trabajar por default no nesecita ningun parametro....

//////////////////////////////////////////////////////////////////////////
// const cosas3 = ['a', 'b', 'c']
// console.log(cosas3)//?el antes

// cosas3.shift()
// console.log(cosas3)//?El despues
//? Shift quita el primer elemento del array


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const cosas4 = ['a', 'b', 'c']
// console.log(cosas4)//?el antes

// const joincosas4 = cosas4.join('$')
// console.log(joincosas4)//?El despues
//? join une los elementos separados por un espacio con el parametro dado
/////////////////////////////////////////////////////////

// const cosas5 = ['a', 'b', 'c']
// console.log(cosas5)//?el antes

// cosas5.unshift('h')
// console.log(cosas5)//?El despues
//?Unshift agrega un elemento al inicio del array
//////////////////////////////////////////////////////////////////////////////

const cosas6 = ['a', 'b', 'c']
console.log(cosas6)//?el antes

cosas6.splice(0, 1, 'h', 'y')
console.log(cosas6)//?El despues
//? splice coloca elementos los numeros representan los indices en los que los elementos en los parametros....
//?...serán colocados
/////////////////////////////////////////////////////////////////////////////////////////

const cosas7 = ['a', 'b', 'c', 45, 'fg']
console.log(cosas7)//?el antes


const cosas7Find = cosas7.find((cosa) => cosa  === 'a')
console.log(cosas7Find ? 'encontro esto' : 'no se encontro el elemento', cosas7Find)//?El despues
//? find encuentra un elemento, solo si el elemento a buscar existe en el array, pero no encuentra partes de un elemento
/////////////////////////////////////////////////////////////////////////////////////////////////////

const cosas8 = ['a', 'b', 'c', 45, 'fg']

console.log(cosas8.includes('z', 'b', 'z'))
//? retorna un boolean si el array incluye o no el parametro indicado....
//? al parecer solo valida un solo  elemento 
//////////////////////////////////////////////////////////////////////////////////////////

const cosas9 = ['a', 'b', 'c', 45, 'fg', 'abc']

cosas9.sort((a, b) => (a < b ? -1 : 1))

console.log(cosas9)
//? 01:00:00 ver mas.....

///////////////////////////////////////////////////////
const galeria = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const copiaGaleria = galeria.map((element) => element)
copiaGaleria.sort(() =>0.5 -Math.random())
copiaGaleria.splice(4, 1, 'a', 'b', 'c')
console.log('galeria', galeria)
console.log ('copia', copiaGaleria)
//? este codigo crea una galeria random pero los elementos a , b, c strings se quedan en su lugar y los demas son aleatorios
//? 01:42:00



