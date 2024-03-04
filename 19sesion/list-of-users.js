export const createUsersList = (users) => {
  const phones = document.querySelector('#phones')

  users.forEach((user) => {
    const mainLi = document.createElement('li')

    const ul = document.createElement('ul')

    const name = document.createElement('li')
    const phone = document.createElement('li')
    const username = document.createElement('li')

    name.innerHTML = `Nombre: ${user.name}`
    phone.innerHTML = `Phone: ${user.phone}`
    username.innerHTML = `Alias: ${user.username}`

    ul.append(name)
    ul.append(phone)
    ul.append(username)

    mainLi.append(ul)

    phones.append(mainLi)
  })

  return
}
