export const getUsers = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())

  return users
}
