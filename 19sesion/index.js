import { getUsers } from './services.js'
import { createUsersList } from './list-of-users.js'

document.addEventListener('DOMContentLoaded', () => {
  const printUsers = async () => {
    const ls = localStorage.storage && JSON.parse(localStorage.storage)

    let users = ls?.users

    if (!ls) {
      users = await getUsers()

      const storage = {
        users: users,
        maxAge: 5000,
        createdAt: Date.now()
      }

      localStorage.setItem('storage', JSON.stringify(storage))
    }

    createUsersList(users)

    /* Eliminar storage si ya se cumplió el tiempo */

    if (Date.now() > ls?.createdAt + ls?.maxAge)
      localStorage.removeItem('storage')
  }

  printUsers()
})
