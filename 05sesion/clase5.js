// // ✅ Sort in Descending order
// const strArr1 = ['a', 'c', 'z', 'f'];
// const descArr = strArr1.sort().reverse();
// console.log(descArr); // 👉 ['z', 'f', 'c', 'a']

// // ✅ Sort in Descending order (Alternative)
// const strArr2 = ['a', 'c', 'z', 'f'];
// const descArr2 = strArr2.sort((a, b) => (a > b ? -1 : 1));
// console.log(descArr2); // 👉 ['z', 'f', 'c', 'a']

// // ✅ Sort in ascending order
// const strArr3 = ['z', 'c', 'a', 'f'];
// const ascArr = strArr3.sort();
// console.log(ascArr); // 👉 ['a', 'c', 'f', 'z']

// // ✅ Sort in Descending order (Alternative)
// const strArr2 = ['a', 'aa', 'c', 'z', 'f']
// const descArr2 = strArr2.sort((a, b) => (a > b ? -1 : 1))
// // console.log(descArr2) // 👉️ ['z', 'f', 'c', 'a']
// const numbers = [1, 2, 3, 4, 7, 5, 9, 15].reverse()
// console.log(numbers.sort((a, b) => (a < b ? -1 : 1)))


// const words = ['casa', 'carro', 'naranja', 'amarillo']
// console.log(
//   words.sort((a, b) => (!a.startsWith('n') && b.startsWith('n') ? -1 : 1))
// )
//esto sirve para el ordenamiento de arrays....
//Ver S5 1:27

//funcion aparte

const mensaje = 'continuara'.substring(0,20 - 3) + '...'
console.log('~mensaje:', mensaje)
////////////////////////////////////////////////////////////////////////

// ✅ Sort in Descending order (Alternative)
const strArr2 = ['a', 'aa', 'c', 'z', 'f']
const descArr2 = strArr2.sort((a, b) => (a > b ? -1 : 1))
// console.log(descArr2) // 👉️ ['z', 'f', 'c', 'a']
const numbers = [1, 2, 3, 4, 7, 5, 9, 15].reverse()
console.log(numbers.sort((a, b) => (a < b ? -1 : 1)))

/////////
const words = ['casa', 'carro', 'naranja', 'amarillo']
console.log(
  words.sort((a, b) => (!a.startsWith('n') && b.startsWith('n') ? -1 : 1))
)

const words2 = ['casa', 'carro', 'naranja', 'amarillo']
console.log(
  words2.sort((a, b) => (a.startsWith('n') && b.startsWith('n') ? -1 : 1))
)




