Symbol.prototype.toString = function() {
    return 'Symbol'
}
var sym = Symbol('fullname')
var o = {
    name: 'Singhi',
    [sym]: 'Singhi John'
}

Object.defineProperty(o, 'job', {
    configurable: false,
    enumerable: false,
    get: function() {
        return 'No job.'
    }
})

o.__proto__ = {
    age: 30
}

console.log('name' in o)
console.log('age' in o)
console.log('job' in o)
console.log('oo' in o)
// just own properties and enumerable
console.log(Object.keys(o))
console.log(Object.getOwnPropertyNames(o))
console.log(Object.getOwnPropertySymbols(o))
// own properties and properties from it's prototype chain
// and must enumerable and non-symbol
for(var p in o) {
    console.log(p)
}
