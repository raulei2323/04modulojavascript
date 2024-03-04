const persona = {
  nombre: 'Samuel',
  edad: '34',
  altura: '1.8'
}


/**
 * @param {object} objeto
*/
const saludar = (objeto) => {
  
  const saludo = `Hola que tal... ${objeto.nombre}`

  return saludo

}
console.log(saludar(persona))
  


