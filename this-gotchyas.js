// Implicit Binding: The value of this depends on how a function is called. In a regular function call, this usually refers to the global object (window in browsers, global in Node.js), but in strict mode ('use strict'), it's undefined.

function showThis() {
  console.log(this)
}

showThis() // In non-strict mode: window (browser) or global (Node.js)
;('use strict')

function showThisStrict() {
  console.log(this) // undefined. NOTE this doesnt work
}

showThisStrict() // undefined

// Object Method Binding: When a function is called as a method of an object, this refers to that object.

const myObject = {
  name: 'My Object',
  logName: function () {
    console.log(this.name)
  },
}
myObject.logName() // 'My Object'

// Explicit Binding (call, apply, bind): These methods allow you to explicitly set the value of this.

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`)
}

const person = { name: 'Alice' }
greet.call(person, 'Hello') // 'Hello, Alice!'
greet.apply(person, ['Hi']) // 'Hi, Alice!'
const sayHello = greet.bind(person, 'Greetings')
sayHello() // 'Greetings, Alice!'

// Arrow Functions: Arrow functions have lexical this binding. They inherit the this value from their surrounding scope. This can be different from traditional function expressions.

const myOtherObject = {
  value: 10,
  getValueArrow: () => console.log(this.value), // 'this' refers to the global object
  getValueFunction: function () {
    console.log(this.value) // 'this' refers to myOtherObject
  },
}
myOtherObject.getValueArrow() // undefined (in strict mode) or depends on the environment
myOtherObject.getValueFunction() // 10
