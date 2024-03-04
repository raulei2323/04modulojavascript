const tarjeta = {
  emisor: 'Blue Block',
  textura: 'lisa',
  material: 'plastico',
  'se-Usa-En': 'tiendas',
  contenido: {
    logotipo: 'logo.png',
    titulo: 'Certificado ...'
  },
  pagar: () => console.log('estoy pagando...'),
  cancelarPago: () => {
    console.log('cancelar pago')

    return 'la cantidad cancelada fue $123'
  },
}

// console.log(tarjeta['se-Usa-En']) //si no se usa la forma convencional de nombrar variables, se puede encerar en [] corchetes cuadrados para revisarla como string y la encontrará//

// console.log(tarjeta.material)//muestra lo que tiene dentro de material
// console.log(tarjeta.contenido)//muestra todo lo que tenga dentro de contenido
// console.log(tarjeta.cancelarPago())//ejecuta la funcion cancelarpPago como es funcion debe llevar los parentesis() aunque aun no tenga parametros.......//
//ademas se mete dentro de un console.log para su return imprima su contenido//
///////////////////////////////////////////
//hace una copia del objeto, se le pueden sobreescribir los valores....se ve mas abajo//
  // const mockTarjeta = {
  //   ...tarjeta
  // }

  // console.log(mockTarjeta)
///////////////////////////////

// const mockTarjeta = {
//   ...tarjeta,
//   dondeSeUsa: tarjeta['se-Usa-En']
// }

// console.log(mockTarjeta)

//para reasignar el nombre de una propiedad, sin embargo no se borra el nombre ya que se creo una copia y en esa copia
//fue donde se le reasigno el nombre a la propiedad

/////////////////////////////////////////

// console.log(mockTarjeta.perro)
//como no hay una propieda llamada perro nos imprimira undefined

/////////////////////////////////////////////////////
//boolean if else
// console.log(mockTarjeta.perro ? mockTarjeta.perro : 'el valor no existe')
//leguaje convencional  ?= if  despues del ? va el ENTONCES y despues de ese argumento los dos puntos son = al SI NO 
// mockTarjeta.perro ? = if mockTarjeta.perro, reocordar que en ternarios al finalizar el argumento sique implicitamente el ENTONCES y los dos puntos son el SI NO///



/////////////////////////
//mas boolean if else 
// console.log(!mockTarjeta.alto === undefined ? 'el valor no existe' : mockTarjeta.alto)

// console.log(mockTarjeta.alto === '' ? 'el valor no existe' : mockTarjeta.alto)

//no olvidar seguir practicando con ternarios....////


//!---------------------------------------------------------------------
// console.log(mockTarjeta?.perro && 'El valor existe')
//aqui arriba es una forma de if....el signo de interrogacion es el if, esta verificando si el valor perro existe en Tarjeta//
//Si dicho valor existe ENTONCES el retorno sera 'EL valor existe'...


// console.log(!mockTarjeta?.perro && 'El valor no existe')

//aqui es lo mismo pero con el NO si el valor perro NO esta dentro de tarjeta ENTONCES el return será 'El valor NO existe'//
//!Termina important revisar sesion4 javascript para mas info del 12 01 24
/////////////////////////////////////////
//extraer en una variable uno o mas de las propiedades del objeto

// const {material} =  tarjeta
// console.log(material)

//si hacmos console.log se imprimira ek contenido que tiene la propierad material
//revisado...solo necesita el objeto alq eu hace referencia y se pueden sacar varias propiedades

//////////////////////////////////////

//extraer una propiedad y ademas si se crea otra variable en esta segunda variable 
//pueden ir las propiedades que no hayan sido llamadas en la primer variable

// const{material, ...todasLasQUeSobran} = tarjeta
// console.log(todasLasQUeSobran)
//en este console.log solo se imprimiran las propiedades que faltaban, por ejemplo se excluidria la pro---
//piedad material...

////////////////////////////////////////////////////
//aqui se esta haciendo un mock con todas las propiedades menos material ya que se excluyo de la conts...
//...todasLasQueSobran
// const{material, ...todasLasQUeSobran} = tarjeta
// console.log(todasLasQUeSobran)

// const mockTarjeta = {
//   ...todasLasQUeSobran
// }
// console.log(mockTarjeta)

////////////////////////////////////////
//y ahora lo mismo de arriba pero con la sustitucion del nombre extraño de la propiedad 
// const{material, ...todasLasQUeSobran} = tarjeta

// const mockTarjeta = {
//   ...todasLasQUeSobran,
//   dondeSeUsa: tarjeta['se-Usa-En']
// }
// console.log(mockTarjeta)

/////////////////////////////////////////////////////////////
// const persona = {
//   nombre: 'Samuel',
//   edad: '34',
//   altura: '1.8'
// }


// /**
//  * @param {object} objeto
// */
// const saludar = (objeto) => {
//   const saludo = `Hola que tal... ${objeto.nombre}`

//   return saludo

// }
// console.log(saludar(persona))

//se explica en S4 2:40

//todo: tarea validaciones 

//Better Comments 
//!Important
//?What???
//todo weellltodoyeah
//*Strange color
////Underlined






