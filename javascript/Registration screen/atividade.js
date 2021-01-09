const form = document.getElementById('form')
const name = document.getElementById('name')
const attributes = document.getElementById('attributes')
const choose = document.getElementById('choose')
const result = document.getElementById('result')

const petDog = [];
const petCat = [];

name.focus()

// Animal
function Animal(name) {
  this.name = name;
}

// Dog
class Dog extends Animal {
constructor(name, breed) {
   super(name);
   this.breed = breed;
 }
}

// Cat
class Cat extends Animal {
constructor(name, cuteness) {
   super(name);
   this.cuteness = cuteness;
 }
}

// Change the placeholder
form.onchange = function myFunction(event) {
  event.preventDefault()
  const value = choose.options[choose.selectedIndex].value;
  if (value == 'dog') {
    attributes.placeholder = 'Breed'
  } else {
    attributes.placeholder = `Cuteness`
  }
}

// Submit the register
form.onsubmit = function chamar(event) {
  event.preventDefault()

  if (!name.value) {
    console.log ('You need to specify the pet name.')
    name.focus()
    return
  }

  if (!attributes.value) {
    console.log ('You need to specify the pet attribute.')
    attributes.focus()
    return
  }

  if (!choose.value) {
    console.log ('You need to specify the pet type.')
    choose.focus()
    return
  }

  const value = choose.options[choose.selectedIndex].value;
  if (value == 'dog') {
    const dog = new Dog(name.value, attributes.value)
    petDog.push(dog)
    console.log (`Name: ${dog.name}, Breed: ${dog.breed}, Type: Dog.`)
  } else {
    const cat = new Cat(name.value, attributes.value)
    petCat.push(cat)
    console.log (`Name: ${cat.name}, Breed: ${cat.breed}, Type: Cat.`)
  }

  console.log ('Pet successfully registered!')
  name.value = ''
  attributes.value = ''
  choose.value = ''
  name.focus();
}