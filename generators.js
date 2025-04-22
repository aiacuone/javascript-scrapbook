// Generators (function*) shine in specific scenarios where lazy evaluation, memory efficiency, or custom iteration control are needed. Here are the most practical use cases:

// Basic Generator Example
function* numberGenerator() {
  yield 1
  yield 2
  yield 3
}

const gen = numberGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next()) //note: its not done until all 3 yields have been called

// Since generators implement the iterable protocol, you can loop over them:
for (const num of numberGenerator()) {
  console.log(num) // 1, 2, 3
}

// Or convert to an array:
const nums = [...numberGenerator()]
console.log(nums)

// two-way communcation
function* twoWayGenerator() {
  const name = yield "What's your name?"
  yield `Hello, ${name}!`
}

const twoWayGen = twoWayGenerator()
console.log(twoWayGen.next().value)
console.log(twoWayGen.next('Alice').value)

// infinite sequences
function* infiniteCounter() {
  let i = 0
  while (true) yield i++
}

const counter = infiniteCounter()
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
