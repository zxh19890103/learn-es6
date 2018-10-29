// "use strict"

;(function() {
    var b
    var a = b = 3
    console.log(a, b)
})()

console.log("a defined? " + (typeof a !== 'undefined'))
console.log("b defined? " + (typeof b !== 'undefined'))

var o = {
    foo: 'bar',
    func: function () {
        var self = this
        console.log(self.foo)
        ;(function() {
            console.log(this.foo)
            console.log(self.foo)
        }())
    }
}

o.func()

eval('var bar = "Hello, World"; console.log(bar);')
// console.log(bar)

console.log(Number.EPSILON)

function sum(a, b) {
    console.log(arguments.length)
    if (b === undefined) {
        return function(c) {
            return a + arguments[0]
        }
    } else {
        return a + b
    }
}

console.log(sum(2,3))
console.log(sum(2)(3))

const arr0 = "john".split('')
const arr1 = arr0.reverse()
const arr2 = "jones".split('')
const arr3 = arr1.concat(arr2)
console.log(arr0)
console.log(arr1)
console.log(arr2)
console.log(arr3)

function fuck() {
    console.log(x, y)
    var x = 1, y = 2
}
fuck()

