let isPermutation = (a: string, b: string) => {
	if (a.length != b.length) return false

	let stringMap: StringMap = {}

	for (let char of a) {
		if (!stringMap[char]) {
			stringMap[char] = 0
		}
		stringMap[char] += 1
	}

	for (let char of b) {
		if (!stringMap[char] || stringMap[char] === 0) {
			return false
		} else {
			stringMap[char]--
		}
	}
	return true
}

interface StringMap {
	[key: string]: number
}

console.log(isPermutation("abcd", "badc"))
console.log(isPermutation("bbcc", "ccba"))
console.log(isPermutation("abcdd", "badc"))
console.log(isPermutation("abcde", "badc"))
console.log(isPermutation("abc", "abc"))
console.log(isPermutation("hhhhhh", "hhhhhh"))
console.log(isPermutation("🐈🐈🐈🐈", "🐈🐈🐈🐈"))
console.log(isPermutation("🐶🐶🐱", "🐱🐶🐱"))