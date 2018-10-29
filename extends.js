Function.prototype.extends = function(Super) {
    var proto = this.prototype
    proto.__proto__ = Super.prototype
    Object.defineProperty(proto, '__super__', {
        configurable: false,
        writable: false,
        value: Super,
        enumerable: false
    })
}

Function.prototype.create = function() {
    var o = new Object()
    var chain = this.getConstructorsChain()
    chain.forEach(function(constructor) {
        constructor.call(o)
    })
    o.__proto__ = this.prototype
    return o
}

Function.prototype.getConstructorsChain = function() {
    var that = this
    var chain = []
    var MAX = 10, i = 0
    while(i < MAX) {
        if (that === Object) break
        chain.push(that)
        that = that.prototype.__super__
        if (that === undefined) that = Object
        i ++
    }
    chain.reverse()
    return chain
}

function Animal() {
    this.animal = true
    this.name = 'animal'
}

Animal.prototype.say = function() {
    console.log('Say...')
}
Animal.prototype.fuck = 'Fuck'

// Animal.extends(Object)

function Human() {
    Animal.call(this)
    this.sex = 1
    this.name = 'human'
}

Human.extends(Animal)

Human.prototype.say = function() {
    console.log('Say Hi.')
}

function Woman() {
    Human.call(this)
    this.sexy = true
    this.sex = 0
    this.name = 'woman'
}

Woman.extends(Human)

// Human - Animal - Object
// human -> Human.prototype - Animal.prototype - Object.prototype - null

// var human = Human.create()
// console.log(human.age)

var woman = new Woman()
woman.say()
console.log(Animal.prototype)
console.log(Object.keys(woman))
console.log(Object.keys(new Human()))
console.log(Object.keys(new Animal()))