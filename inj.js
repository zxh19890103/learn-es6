'use strict'

const watchers = {
  'person.name': new Set()
}

let cur = null

const person = {
 name: "Singhi",
 getName() {
   if (!watchers['person.name'].has(cur)) {
    watchers['person.name'].add(cur)
   }
  return this.name
 },
 setName(name) {
   this.name = name
   const ws = watchers['person.name']
   ws.forEach(w => {
      Promise.resolve().then(w)
    })
 },
 age: "18",
}

function listener() {
  const name = person.getName()
  console.log(name)
}

const bind = (fn) => {
  cur = fn
  fn()
  cur = null
}

// Collection
bind(listener)
// Again
bind(listener)

// emits
person.setName("Michael")
