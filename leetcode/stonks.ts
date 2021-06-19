let stonks = (arr: number[]) => {
  let profits: number[] = [arr.length]
  let minBought: number = arr[0]

  for (let i = 1; i < arr.length; i++) {
    console.log('P: ', profits[i-1])
    profits.push(Math.max(profits[i-1], arr[i] - minBought))
    minBought = Math.min(minBought, arr[i])
  }

  return profits
}

console.log(stonks([7,1,5,3,6,4]))
console.log(stonks([7,6,4,3,1]))