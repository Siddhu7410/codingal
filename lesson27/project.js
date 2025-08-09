var a = [2, 4, 6, 8, 10, 12, 14]
a.sort(function (a, b) { return a - b })
console.log(a)
a.sort(function (a, b) { return b - a })
console.log(a)
a.map(e => e * 20)
console.log(a.map(e => e * 20))
