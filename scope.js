const globalConst = 'globalConst'
let globalLet = 'globalLet'
var globalVar = 'globalVar'

const arrowFunction = () => {
  const arrowFunctionConst = 'arrowFunctionConst'
  let arrowFunctionLet = 'arrowFunctionLet'
  var arrowFunctionVar = 'arrowFunctionVar'
}
// console.log(arrowFunctionConst, arrowFunctionLet, arrowFunctionVar) // undefined



const traditionalFunction = () => {
  const traditionalFunctionConst = 'traditionalFunctionConst'
  let traditionalFunctionLet = 'traditionalFunctionLet'
  var traditionalFunctionVar = 'traditionalFunctionVar'
}
// console.log(
//   traditionalFunctionConst,
//   traditionalFunctionLet,
//   traditionalFunctionVar
// ) // undefined


if (true) {
  const blockConst = 'blockConst'
  let blockLet = 'blockLet'
  var blockVar = 'blockVar'
}
// console.log(blockConst, blockLet) // undefined
console.log(blockVar)


console.log(globalConst, globalLet, globalVar)
