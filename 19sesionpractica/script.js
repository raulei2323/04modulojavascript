
const formulario = document.getElementById('formulario')
const userFirstInfo = document.getElementById('userFirstInfo')
const userExtraInfo = document.getElementById('userExtraInfo')
const userPref = document.getElementById('userPref')


let datos = JSON.parse(localStorage.getItem('datosFormulario')) || []

formulario.addEventListener('submit', function (alenviar)) {
  Event.preventDefault()

  const userFIData = userFirstInfo.value
  const userEIData = userExtraInfo.value
  const userPrefData= userPref.value

  if( userFIData && userEIData && userPrefData) {
    const datosNuevos = {userFIData, userEIData, userPrefData}
    datos.push(datosNuevos)
    guardarEnLocal()
    formulario.reset()
  }

  function guardarEnLocal() {
    localStorage.setItem("datosFormulario",JSON.stringify(datos))

  }

}









  // document.addEventListener('DOMContentLoaded', () => {
  //   const obtenerFormulario = async () => {
  //     const formInLS = formInStorage.elementos && JSON.parse(formInStorage.elementos)
  //   }
  // })
  
  
  
  // const formulario = document.getElementById('formulario')
  // console.log(formulario)
  // for (let elementos = 0; elementos <= formulario.length; elementos ++) {
  
  //   if(formulario[elementos].type == 'text'){
  //     console.log(formulario[elementos].value)
  //     localStorage.setItem(formulario[elementos].id, JSON.stringify(formulario[elementos].value))
  // }
  // }
  
  // const inputs = document.getElementsByTagName('input')
  // const options = document.getElementsByTagName('option')
