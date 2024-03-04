console.log('Sesion 8')


//?----------Math-------------------
//? Operaciones matematicas con math

console.log(Math.pow(8, 2)) //?exponente
console.log(Math.sqrt(25))//? raiz cuadrada
console.log(Math.abs(-235))//? valores absolutos
console.log(Math.sin(90))//?Seno
console.log(Math.cos(180))//?Coseno
console.log(Math.PI)//?Valor de PI
console.log(Math.round(Math.PI))//?redeondea 
console.log(Math.ceil(Math.PI))//?Redondea hacia arriba
console.log(Math.min(8, 2, 3, 34343, 33,34344455443))//?Numero mas pequeño
console.log(Math.max(8, 2, 3, 34343, 33,34344455443))//?Numero mas grande
console.log(Math.random())//? Te da un numero aleatorio entre 0 y .9999

console.log(Math.round(Math.random() * 10))//?Lo mas parecido a un numero random

/////////////////////////////////////////////////////////////////////////////////////////

const pelotas = ['roja', 'amarilla', 'azul', 'morado', 'rosa', 'cafe', 'turquesa']

const aleatorio = Math.abs(Math.round(Math.random() * pelotas.length -1))
console.log(pelotas[aleatorio], aleatorio)
//?Funcion que muestra un elemento de forma random
//?El random nos da un numero que se multiplica por el numero de elementos (length - 1 por el indice 0), round lo redondea y abs.....
//?.....da el valor absoluto para que si sale un -1 lo muestre como 1....
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//?------------------------------------max min--------------
console.log(Math.round(Math.random() * (4 - 2) + 2))
//? usando max min la funcion da aleatoriamente un numero entre el 2 y el 4
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rand = Math.random()
let maxMin = 4-2
let min = 2
console.log(Math.round(rand * maxMin + min ))
console.log(`Este es el random sin redondear: ${rand}, Se multiplica con la diferencia de maximo y minimo ${maxMin} * ${rand}  = ${rand * maxMin}
, y se le suma el minimo que es ${min} + ${rand * maxMin} =  ${rand * maxMin + min} y redondeado queda ${Math.round(rand * maxMin + min )}`)
console.log('La funcion random redondea a donde le queda mas cerca el decimal, 5.4 = 5 y 5.6 = 6')
//?Funcion compartida por Leonardo Meza------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const stringToNumber = parseInt( '45')
console.log(stringToNumber)
//?De string a number.....utilizando el parseInt...si el numero es decimal float se usa parseFloat

//?:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const persona = {
  edad: 23,
  genero: 'hombre'
}
 console.log(JSON.stringify(persona))
//?Convierte un objeto en strings con sus propiedades y valores en strings, los numeros seguiran como numeros
const jsonString =JSON.stringify(persona)
console.log(typeof JSON.parse(jsonString))
//? de esta forma se regrese la string dada a objeto---------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const date = new Date()

console.log('Date:', date)
//?------Una forma de imprimir la hora y fecha actual...toma como referencia la hora del sistema o la del servidor
//!Tener cuidado con la hora que toma ya que puede ser diferente a la necesaria o a la que se use para trabajar
const dateNow = new Date()

console.log('Date:', dateNow.getDate())
//?--Get day----------------------

const month = new Date()

console.log('Date:', date.getMonth())
//? se pueden obtener el mes, la hora e incluso segundos por separado, indice cero !!!!!!
