Function.prototype.inherits = function (T) {
    this.prototype = new T()
}

function Animal() {
    this.name = 'Animal'
}

Animal.prototype.roar = function () {
    console.log(`Roar... I am an ${this.name}.`)
}

function Tigger() {
    this.name = 'Tigger'
}
Tigger.inherits(Animal)

// const tigger = new Tigger()
// tigger.roar()

// console.log(tigger.__proto__ === Tigger.prototype)
// console.log(tigger.__proto__.__proto__ === Animal.prototype)

new Promise((resolve, reject) => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
    }, 0)
}).then(n => console.log)
console.log('3')