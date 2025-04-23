// This is the pre es6 way of creating a class
//------------------------------------------------------------
function Animal(name) {
  this.name = name
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`)
}
//--------------------------------------------------------------

function Dog(name, breed) {
  Animal.call(this, name) // Call the Animal constructor
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype) // Set up the prototype chain
Dog.prototype.constructor = Dog // Reset the constructor property
Dog.prototype.bark = function () {
  console.log('Woof!')
}

const myDog = new Dog('Buddy', 'Golden Retriever')
myDog.speak() // 'Buddy makes a sound.' (inherited from Animal)
myDog.bark() // 'Woof!' (defined in Dog)
console.log(myDog instanceof Animal) // true
console.log(myDog instanceof Dog) // true
