import { LinkedList } from './linked-list.js'

const list = new LinkedList()

// Append values
console.log('====  APPEND ====')
list.append('dog')
list.append('cat')
list.append('parrot')
list.append('hamster')
list.append('snake')
list.append('turtle')
console.log(list.toString())

// Prepend values
console.log('==== PREPEND ====')
list.prepend('elephant')
list.prepend('giraffe')
list.prepend('rhino')
list.prepend('lion')
list.prepend('tiger')
list.prepend('hippo')
console.log(list.toString())

// Size of, Head, and Tail
console.log('Size of list: ' + list.size())
console.log('Head of list: ' + list.head().value)
console.log('Tail of list: ' + list.tail().value)

// Return node at given index
console.log('==== AT INDEX ====')
console.log(list.at(0)) // Should be Hippo
console.log(list.at(4)) // Should be Giraffe
console.log(list.at(8)) // Should be Parrot
console.log(list.at(11)) // Should be Turtle

// Removes the last element from the list
console.log('==== POP! ====')
list.pop()
console.log('Popped ...')
console.log(list.toString())

// Returns true if passed in value is in the list otherwise returns false.
console.log('==== CONTAINS ====')
console.log(list.contains('lion')) // Should be true
console.log(list.contains('parrot')) // Should be true
console.log(list.contains('Sammy')) // Should be false
console.log(list.contains('zombie')) // Should be false
console.log(list.contains('cat')) // Should be true

// Returns the index of the node containing value, or null if not found

console.log('==== FIND ====')
console.log(list.find('lion')) // Should be 2
console.log(list.find('parrot')) // Should be 8
console.log(list.find('Sammy')) // Should be null
console.log(list.find('zombie')) // Should be null
console.log(list.find('cat')) // Should be 7
