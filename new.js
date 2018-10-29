function newIt() {
    var o = new Object()
    var F = Array.prototype.shift.call(arguments)
    o.__proto__ = F.prototype
    var result = F.apply(o, arguments)
    if (typeof result === 'object') return result
    return o
}

function Animal(name) {
    this.name = name
}

var animal = new Animal('fogg')
var animal2 = newIt(Animal, 'cog')

console.log(animal2.name)
console.log(animal.__proto__ === animal2.__proto__)