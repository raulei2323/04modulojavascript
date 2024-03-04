console.log('Sesion6 JavaScript clases....propotipos contadores')




//?--------1--------//

// class PersonaPrototype {
//     constructor(nombre, genero) {
//       this.nombre = nombre
//       this.genero = genero
//       this.caminar = () => {
//         console.log(`${this.nombre} esta caminando...`)
//       }
//     }
//   }
  
//   const personaPrototype_1 = new PersonaPrototype('Samuel', 'hombre')
//   const personaPrototype_2 = new PersonaPrototype('Angel', 'hombre')
//   const personaPrototype_3 = new PersonaPrototype('Jesica', 'mujer')
  
//   personaPrototype_1.caminar() 

  //?clases para objetos en javascript actualmente muy en deshuso por cuentiones de rendimiento
  //?REACT utiliza funciones para represenntar prototipos de objetos


  //?-------2----------//

  // const personaObject = (nombre, genero) => {
  //   const props = {
  //     nombre,
  //     genero,
  //     caminar: () => {
  //       console.log(`${nombre} esta caminando...`)
  //     }
  //   }
  
  //   return props
  // }
  
  // const personaObject_1 = personaObject('Antonio', 'hombre')
  // const personaObject_2 = personaObject('Angie', 'mujer')
  
  // personaObject_2.caminar()
//?Hace lo mismo que el class prototype, pero esto ahora se usa mas debido a cuestiones de rendimiento
//? REACT usara funciones en lugar de classes para objetos
  ////////////////////////////////////////////

  //?------------Expresiones regulares------------
//?regexr.com para mas info

//   while-----

  // let counter = 0

  // while (counter <=4) {

  //   console.log('contador while', counter)
  //   counter++

  // }

//-------for-------//

// for (let counter = 0; counter <=4; counter++) {
//     console.log('contador for', counter)
// }
////////////////////////////////////////////////////
//---------for in---------
// const letters = [ 'a', 'b', 'c', 'd','f', 'g']

// for (letter in letters) {
//   console.log('for-in', letter)
// }
//---------for of--------
// for (letter of letters) {
//   console.log('for-of', letter)
// }
///////////////////////////////////////
//?---------Iterar con un objeto con keys---------

const mascota = {
  nombre: 'jarocha',
  raza: 'electrica',
  color: 'cafe',
  patas: 4,
  muerde: false,
  esUnAmor: true
}
//   Object.keys(mascota).forEach((propiedad) => console.log(propiedad))
 //en este codigo usando Object.keys se retorna un array con las propiedades del objeto y entonces es posible iterar con el array del objeto
 //y en este codigo en particular solo se esta imprimiendo las propiedades pero no sus valores
 
/////////
// for (propiedad of Object.keys(mascota)) {
//   console.log('for-of', propiedad)
// }
//?(comenzare a cometar con este tag para diferenciar mas facilmente entre codgo comentado y los comentarios
//? en este codigo ya se pueden ver los valores de cada propieda porque ya se itero sobre cada propiedad
////////////////////////

//?Propiedad y valor de un objeto usando iteraciones------
for (propiedad of Object.entries(mascota)) {
  console.log('entries', propiedad)
}
//?entries sirve para arrays-----------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO: - Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo.
//TODO- Crear una función que reciba un arreglo de números y regrese la lista de números pares que se encuentran en el arreglo
//TODO- Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra
//TODO- Crear una función que recibe un string y regresa false si el string contiene al menos una letra mayúscula




