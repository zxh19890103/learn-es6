
const o = Object.freeze({})
const o1 = {}

Object.preventExtensions // can't add new property
Object.seal                   // all properties can't be configured  and can't add new property
Object.freeze                // all properies can't be configured and can't add new property and can't change the value of property.

console.log(Object.isExtensible(o),Object.isFrozen(o))
console.log(Object.isExtensible(o1),Object.isFrozen(o1))

const o2 = Object.preventExtensions({ name: 'Singhi' })
o2.age = 90
o2.name = 'Hi'
console.log(o2)

const o3 = Object.seal({ name: 'Singhi' })
o3.name = 'Good'
delete o3.name
o3.age = 30
console.log(o3)


const o4 = Object.freeze({ name: 'Singhi' })
o4.name = 'Hi'
console.log(o4)
