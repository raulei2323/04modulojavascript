document.addEventListener('DOMContentLoaded', () => {

    const agregarCosas = (cosa) => {
        const elementoDeLista = document.createElement('li')
        elementoDeLista.innerHTML = cosa
        lsta.append(elementoDeLista)

        return
    }

    btnAgregar.addEventListener('click', () => {

        const valor = campo.value

        agregarCosas(valor)

        return
    })
})