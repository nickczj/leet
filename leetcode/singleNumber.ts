let singleNumber = (nums: number[]) => {
  let a = 0
  for (let i = 0; i < nums.length; i++) {
    a = a ^ nums[i]
  }
  return a
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))
console.log(singleNumber([-1]))