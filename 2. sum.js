function calculateSum(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) sum += i
    return sum
}
console.log(calculateSum(4))
console.log(calculateSum(8))