

//-----1-----// // comparador de numeros para ver cual es ma grande//
// function cualNumeroesMayor (a, b, c) {

// let result
// if(a > b) result = a
// else result = b

// if (result > c) result = result 
// else result = c

// return result
// }
//  console.log(cualNumeroesMayor(299, 594, 5905009))


 //-----2-----// 77Optimizado pero da el mismo resultado//


//  function cualNumeroesMayor (a, b, c) {
//    let result

//    if (a === b && a === c) { //validacion de que almenos haya un numero diferente//
//     console.log('Los numeros son iguales')

//     return
//    }

//   if(a > b) result = a
//   else result = b
  
//   if (result < c) result = c
  
//   return result
// }
  
//    console.log(cualNumeroesMayor(5, 5, 5))

//-------el mismo pero mas optimizado------//

// function cualNumeroesMayor (a, b, c) {
//   let result

//   if (a === b && a === c) { //validacion de que almenos haya un numero diferente//
    
//     return 'Los numeros son iguales' //esto evita la linea en consola "undefined en la forma anterior ya que el return de la validacion de numeros iguales ahora si regresa algo//"

//   }

//  if(a > b) result = a
//  else result = b
 
//  if (result < c) result = c
 
//  return result
// }
 
//   console.log(cualNumeroesMayor(5, 5, 5))

//--------3------// con ternarios  if else es lo mismo que la 2 solo que mas abreviado//

// function cualNumeroesMayor (a, b, c) {
//   let result
//   a > b ? result = a : result = b

//   result > c ? result : result = c

//   return result
// }

// console.log(cualNumeroesMayor(4000, 600, 20000))


// let timesCounter = 0
// let str = ''

// function nChar(char, times) {
//   str = str + char

//   timesCounter++

//   if (timesCounter >= times) {
//     console.log('se acabo')
//     return str
//   }
//   nChar(char, times)

//   return str
// }

// console.log(nChar('A', 50))

// //------ArrowFunctions--------//

// // normal function//

// function normalFunction (parametros) {
//   return 'Normal function'

// } console.log(normalFunction)

// //-----ArrowFunction-----//

// (parametros) => {} // anonima, necesita estan en una variable para poder funcionar.....

// // arrow function en una constante para poder funcionar//

// const arrowFunction = (parametros) => 'Retorna algo de forma implicita..'

// console.log(arrowFunction)

// const arrowFunction2 =(parametros) => {

//   return 'Si se abren corchetes debemos indicar que retornar.....'

// }
// console.log(arrowFunction2)




