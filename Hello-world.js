
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.

let array = ['foo', 'bar', 10, 'qux'];

const setItem = (arr, positions, replacementCard) => {
  return arr.splice(positions, 1, replacementCard);
}


console.log(setItem(array, 1, "foot"))
console.log(array)