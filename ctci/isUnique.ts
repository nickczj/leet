let isUnique = (s: string) => {
  // assuming it's ASCII text, Unicode will be harder
  if (s.length > 128) {
    return false
  }

  let result: boolean = true
  let b: boolean[] = new Array(128)
  const chars = [...s]

  chars.forEach((char) => {
    let charIndex = char.charCodeAt(0)

    if (b[charIndex]) {
      result = false
      return
    } else {
      b[charIndex] = true
    }
  })

  return result
}

console.log(isUnique("hello"))
console.log(isUnique("world"))