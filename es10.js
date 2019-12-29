// 1. Array.flat()
const fruits = [['🍌', '🍎'],['🍏', ' 🍊']]
const flattenedFruits = fruits.flat()
console.log(flattenedFruits)
// [ '🍌', '🍎', '🍏', ' 🍊' ]

// 2. Array.flatMap()
const fruits2 = ['🍋', '🍎','🍌', ' 🍊','🍏']
const fruitNames = ['lemon','red apple','banana','orange','green apple']
const mappedExample = fruits2.map((fruit, index) => [fruit, fruitNames[index]])
console.log(mappedExample)
// [
//   [ '🍋', 'lemon' ],
//   [ '🍎', 'red apple' ],
//   [ '🍌', 'banana' ],
//   [ ' 🍊', 'orange' ],
//   [ '🍏', 'green apple' ]
// ]
const flatMappedExample = fruits2.flatMap((fruit, index) => [fruit, fruitNames[index]])
console.log(flatMappedExample)
// [
//   '🍋',  'lemon',
//   '🍎',  'red apple',
//   '🍌',  'banana',
//   ' 🍊', 'orange',
//   '🍏',  'green apple'
// ]

// 3. .trimLeft(), .trimRight()
const str = '         Trim me 🆒         '
console.log(str.trimRight())
//          Trim me 🆒
console.log(str.trimLeft())
// Trim me 🆒         


// 4. Object.fromEntries()
const fruitEntries =  [
    [ '🍋', 'lemon' ],
    [ '🍎', 'red apple' ],
    [ '🍌', 'banana' ],
    [ ' 🍊', 'orange' ],
    [ '🍏', 'green apple' ]
]
const fruitsObject = Object.fromEntries(fruitEntries)
console.log(fruitsObject)
// {
//   '🍋': 'lemon',
//   '🍎': 'red apple',
//   '🍌': 'banana',
//   ' 🍊': 'orange',
//   '🍏': 'green apple'
// }

// 5. Optional catch binding
try{
//  ...
}catch {
// above catch (error) may shorts for catch, ommit (error)
}


// 6. Function.toString()
console.log(isNaN.toString())
// function isNaN() { [native code] }

// 7. Symbol.description()
const sym = Symbol('symbol description')
console.log(sym.toString())
// Symbol('symbol description')
console.log(sym.description)
// symbol description