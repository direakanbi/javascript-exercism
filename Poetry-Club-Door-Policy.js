
export function frontDoorResponse(poem) {
  return poem[0]
}
export function frontDoorPassword(capitalize) {
  const firstLetter = capitalize[0]
  const remain = capitalize.slice(1)
  return firstLetter.toUpperCase() + remain.toLowerCase()
}
export function backDoorResponse(poem){
   const lastWord = poem.trim() // to remove extra space which may occur
  return lastWord.slice(-1)
}
export function backDoorPassword(string, politeVersion) {
  const politeWord = ", please"
  return frontDoorPassword(string) + politeWord
}
