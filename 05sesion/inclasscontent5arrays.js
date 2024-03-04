console.log('Holaaaaaaaaa<aaasdtdytewrftyewfcuewctfu')

const arreglo = [
  'esto es una string dentro de un arreglo',
  500,
  true,
  {},
]

console.log(arreglo[0])


/////////////////////////
//replace......aqui se ve como una strig puede tener un metodo...

console.log('Hola a todos'.replace('todos', 'casi todos'))

console.log('Hola a todos'.replace('todos', 5 + 5))

console.log('Hola a todos'.replace(' ', '-'))
//aqui solamente se reemplazará  el primer espacio de la string por un guion
//para reemplazar todos los espacios por guiones o solo quitar todos los espacios se usa otro metodo...


console.log('Hola a todos'.length)
//nos muestra el numero total de caracteres incluyendo espacios, no el indice, aqui nos sale 12 por que es el numero de caracteres no el numero de indices o hasta que indice abarca la string

console.log('Hola a todos'.substring(0, 4))
//selecciona desde que caracter hasta que otro imprimira......extrañamente no usa  el index...ver ejemplo
//lo que hace es que del caracter indice zero empieza a imprimir desde el indice 0 y deja de imprimir un caracter antes del otro caracter dado en los parametros


const cadena1 ='la mañana se nos echa encima.'
const cadena2 = cadena1.slice(3, -2)
console.log(cadena2)
//aqui imprime desde indice 3 y luego de indice zero cuenta -1 y -2 y ya no imprime desde ahi.....

const saludo = 'Hola-mundo-texto-extra final'
console.log(saludo.split('-'))
//crea strigs de las palabras las separa por los guines si algunas no tienen guion y en vez tienen un espacio la pondra con su espacio
//pero en una misma string

const cosas = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10]
cosas.sort()
console.log(cosas)
//.sort ordena un array por defecto lo hace de forma ascendente....tener cuidado ya que toma el primer caracter para...
//...ir ordenando los elementos en este caso imprimió 1, 10, 2, 3, 

const cosas3 = [1, 2, 3, 4, 5, 6,]
console.log(cosas3.reverse())
//sirve para poner alreves un array

const texto1 ='hola mundo'
console.log(texto1.split(''))
//separa cada caracter y lo convierte en un string individual, incluido el espacio
//
////////////////////////////////
// const persona4 = {
//   nombre: 'Samuel',
//   edad: '34',
//   estatura: 1.8

// }

// const variaspersonas = [persona4, persona4, persona4, persona4]

// variaspersonas.forEach((persona, index) => {
//   console.log(persona.nombre)
// })

//los objetos no son iterables...pero podemos usar keys

// const personasvarias2 = {
//   propietario: {nombre: 'Samuel', edad: '34', estatura: 1.8},
//   mascota: { nombre: 'jarocha', raza: 'electrica'}
// }
// Object.keys(personasvarias2).forEach((propiedad) => {

//   console.log(personasvarias2[propiedad])
// })

//imprime la iteracion de las propiedades dentro del objeto personasvarias2
///////////////////////////////////////////////////////////////


// const personasvarias2 = {
//   propietario: {nombre: 'Samuel', edad: '34', estatura: 1.8},
//   mascota: { nombre: 'jarocha', raza: 'electrica'}
// }
// Object.keys(personasvarias2).forEach((propiedad) => {

//   personasvarias2[propiedad].nombre = 'otro nombre'


//   console.log(personasvarias2[propiedad])
// })
//Sustituye el combre por 'otro nombre en la copia del objeeto que fue copiado a array para pode iterarlo

///////////////////////////////////////////
// const personasvarias2 = {
//   propietario: {nombre: 'Samuel', edad: '34', estatura: 1.8},
//   mascota: { nombre: 'jarocha', raza: 'electrica'}
// }
// Object.keys(personasvarias2).forEach((propiedad) => {

//   personasvarias2[propiedad].raza = 'otra raza'


//   console.log(personasvarias2[propiedad])
// })
//! Asignacion de nuevo valor en propietario y sustitucion de valor en mascota
//esto debido a que propiedad raza no existia en propietario, entonces la asigno con el valor 'otra raza'
//pero en mascota sustituyo el valor de raza con 'otra raza' por que si existia
//////////////////////////////////////////////

const personasvarias2 = {
  propietario: {nombre: 'Samuel', edad: '34', estatura: 1.8},
  mascota: { nombre: 'jarocha', raza: 'electrica'}
}
Object.keys(personasvarias2).forEach((propiedad) => {

 if (personasvarias2[propiedad]?.raza) {

  personasvarias2[propiedad].raza = 'otra raza'
 }


  console.log(personasvarias2[propiedad])
})

//! esto soluciona lo de arriba ya que verifica que dentro de las propiedades de cada objeto exista la propiedad raza
//si no exsite no hace nada pero si existe cambia el valor por 'otra raza'
//ver S5 2:45    15 01 24
/////////////////////////////////////////////////////////////////////////

//tarea palindromo

const palindromoLens (wordCheck) => (
  const wordNoSpace = palabraRev.split(' ')
  const wordForwards = wordNoSpace.reverse()
  console.log(wordForwards)

)
console.log(palindromoLens('abcdefg'))



//todo; revisar metodo trim de array





