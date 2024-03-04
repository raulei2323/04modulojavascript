
//-----1------//
// let suma = 2 + 2

// console.log(suma)

// alert(suma)
  //      2       //

// function sumar2Numeros(a,b) {
//   let resultado = a+ b

//   console.log(resultado)

//   return

// }

// sumar2Numeros(3,4)

///////--------3-------///////

//let laContraseñadeladmines = '9393437ghihsdjihhu' //esto no se muestra en consola ya que se necesitaria un console.log para mostrarse//


//console.error('Error', '404=nfysc') //asi se puede marcar un error es un mensaje de error que deberiamos despues resolver}

// const quieroSumar = function sumar2Numeros(a,b) {
//      let resultado = a+ b
  
//      let objeto = {
//       res: resultado,
//       log: 'La suma se hizo correctamente'
//      }
  
//     return objeto
//   }
  
//  quieroSumar(3,4)

//------4------// //suma con comprobacion de numeros, evitando if else //

// const quieroSumar = function sumar2Numeros(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     console.error('ALguno de los parametros NO es un numero')
//     return

//   }
//   let resultado = a + b
//   return resultado
// }
// console.log(quieroSumar(3, 'Hola'))
//arroja en cosola el console.error('ALguno de los parametros NO es un numero')//


//-------5-------/// esoto es llo mismo que el 4 pero con if else//
// const quieroSumar = function sumar2Numeros(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     console.error('Alguno de los parametros NO es un numero')
//     return//salida temprana de la funcion//
//   } else {
//     let resultado = a + b 
//     return resultado//aqui si da el resultado de la funcion, es una funcion completa//
//   }
// }
// console.log(quieroSumar('o', 8))


//--------6------////
//suma
// function sumar2Numeros(a, b) {
//    if (typeof a !== 'number' || typeof b !== 'number') {
//      console.error('ALguno de los parametros NO es un numero')
//      return

//    }
//    let resultado = a + b
//    return resultado
//  }


// //resta//
//  function restar2Numeros(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     console.error('ALguno de los parametros NO es un numero')
//     return

//   }
//   let resultado = a - b
//   return resultado
// }
// console.log(sumar2Numeros(15, 15))
// console.log(restar2Numeros(3, 40))

//-------8------// // creada por mi tambien las comprobaciones//

// function saludar ( a, b ) { //si recibe mas parametros pero no se hasta donde//
//   if (typeof a !== 'string' || typeof b !== 'string') {
//     console.error('Escribe con strings un saludo en el primer parametro y un nombre en el segundo')
//     return
//   }

//   let saludo = a + b
//   return saludo
// }
//  console.log(saludar( 'Hi', ' Jesica'))

//-----mejorada----// //con nombre de parametros mas acordes y significativos//

// function saludar ( saludo, nombre ) { //si recibe mas parametros pero no se hasta donde//
//   if (typeof saludo !== 'string' || typeof nombre !== 'string') {
//     console.error('Escribe con strings un saludo en el primer parametro y un nombre en el segundo')
//     return
//   }

//   let saludoresultado = saludo + nombre
//   return saludoresultado
// }
//  console.log(saludar( 'Hola', ' Jesica'))

 //------9------// // concatenando con &{}//
//  function saludo(name) {
//   if (typeof name !== 'string') {
//     console.error('Este no es un nombre')
//     return
//   }
    
//   return `Hola ${name} buenos dias`
// }
// const saludoDelDia = saludo('Pablo')

// console.log(`Todos los dia cambia el saludo, hoy toca a: ${saludoDelDia}`)

//!!!!Esto ess usando las comillas invertidas se obtienen en la HP 15-db0011la con ctrl+alt+} (esta a dos teclas a la derecha de la tela p)//

//-------10------// //verificador de numeros pares //realizado por mi//

// function verificadorPares (numero){

//   if (typeof numero !== 'number'){

//     console.error('Eso no es un numero. Ingresa un numero')
//     return
//   }

// let operacion = numero % 2

// if (operacion !== 0) {
//   return `El nummero ${numero} es impar`
// }

// if (operacion == 0) {
  
//   return `El numero ${numero} es par`
// }

// }

// console.log(verificadorPares(21))

///------11-----// // como se realizao en clase//

function par(num) {
  if (typeof num !== 'number') {
    console.error('No es numero')
    return
  }
  let parImpar

  if (num % 2 === 0) {
    parImpar = 'Esto es par'
    return parImpar
  }
  parImpar = 'Esto no es par'

  return parImpar
}
console.log(par('hoia'))

//final de clase, sin tarea realmente//

















