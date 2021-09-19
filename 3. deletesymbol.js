function deleteFirstAndLastSymbol(str) {
    let arr = [...str]
    arr.pop()
    arr.shift()
    return arr.join("")
}
console.log(deleteFirstAndLastSymbol('hello'))
console.log(deleteFirstAndLastSymbol('thanks'))