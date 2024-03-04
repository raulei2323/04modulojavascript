console.log('Session 7 Callbackk')
///////////////////////////////////////////////////////////////
//?-------------Contador-------------------
for (let contador = 0; contador <=9; contador++) {
if (contador ===4) continue
console.log('contador', contador)
}
//?-------hacer que imprima solo los pares---------
for (let contador = 0; contador <=9; contador++) {
  if (contador % 2) continue
  console.log('contador', contador)
  }
////////////////////////////////////////////////////////////////////////////////

//?---------callback--------------------


// const callback = (nombre) => {
//   console.log( `Esto es un call back ${nombre}`)

// }

// const funcionPrincipal = (cosas, funcion) => {
// //? lafuncion hace todo lo que tenga que hacer...
// funcion() 
// }
// funcionPrincipal([], () => callback('Ulises'))
// //?----------sintaxis callback------------
///////////////////////////////////////////////////////////////////////////////////////////

// const callback = (nombre) => {
//   console.log( `Esto es un call back ${nombre}`)

// }

// const enciendeLaLuz = () => {

// console.log('Encendiendo la luzzz.....')
// }
// const funcionPrincipal = (cosas, funcion) => [
// //? lafuncion hace todo lo que tenga que hacer...
//   funcion()
// ]
// funcionPrincipal([], () => callback('Ulises'))
// funcionPrincipal([], enciendeLaLuz)


///////////////////////////////////////////////////////////////////////////////////////////////////////


const callback = (recordatorio) => {

}
const alarma = (callback) => {
  
  setTimeout(() => {
    console.log( 'esto tardó 5 segudos')

  }, 5000)
}
alarma()
//?--------------usando time out -----------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////?
//?------------------------Ejemplos---------------------------------

const mostrarMensajes = (m) => {
  console.log(`te recuerdo que ${m}`)
}
const alarma = (mensaje, tiempo) => {
  setTimeout(() => mostrarMensajes(mensaje), tiempo)
}
alarma('Saca la basura', 10)
//?---------------------------------------------------------------------------------------------------------------------------

/* Función ejecutora (función de órden superior) */
const crearFrase = (frase, callback) => {
  const miFrase = `Como yo siempre digo, ${frase}`
  callback(miFrase) // 2
}
/* Función X */
const imprimeFrase = (frase) => {
  console.log(frase)
}
/* Función X */
const contarCaracteres = (frase) => {
  const fraseConEspacios = frase.length
  const fraseSinEspacios = frase.replace(/\s/g, '').length;
  console.log(`La frase tiene ${fraseConEspacios} contando los espacios y ${fraseSinEspacios} sin contar los espacios`)
}
const fraseOriginal = 'perro que no ha de ladrar, déjalo morder.'
crearFrase(fraseOriginal, imprimeFrase) // 1
crearFrase(fraseOriginal, contarCaracteres) // 1
//?-----------------------------------------------------------------------------------------------------------------------------
const agregarSimbolos = (array, callback) => {
  const newArray = array.reduce((acc, curr) => {
    acc.push(`$${curr}`)
    return acc
  }, [])
  callback(newArray)
}
const imprimirArray = (array) => {
  console.log(array)
}
// imprimirArray(['a', 'b', 'c'])
agregarSimbolos(['a', 'b', 'c'], imprimirArray)
//?------------------------------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO modificar plantillas de arriba para practicar callbacks....
//?Propio: describir proceso .........








