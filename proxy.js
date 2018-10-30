let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 37
    },
    set: function(target, name, val) {
        console.log(`you want to set ${val} to ${name}?`)
    }
}

let p = new Proxy({}, handler)
p.age = 26

const arr = [1,2,3,'56']
let handler2 = {
    set: function(target, name, val) {
        console.log(val, name)
    }
}
const p2 = new Proxy(arr, handler2)
p2[1] = 90
console.log(p2)