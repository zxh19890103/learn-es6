const delay = (value, wait) => new Promise((fulfill, reject) => {
    setTimeout(() => fulfill(value), wait * 1000)
  })
  
function* forever() {
    let n = yield delay('Ronnie', 3)
    let m = yield delay('O\'Sullivan', 4)
    let f = yield 'Is a good player'
    throw 'error happens'
    return `${n} ${m} ${f}`
}

const g = forever()

let R = null

function auto(g, input, ok, fail) {
    const it = g.next(input)
    if (it.done) {
        ok.call(null, it.value)
        return
    }
    const v = it.value
    const isPromise = v instanceof Promise
    if (isPromise) {
        v.then(res => {
            auto(g, res, ok, fail)
        }, fail).catch(fail)
    } else {
        auto(g, v, ok, fail)
    }
}

function _async(gen) {
    const g = gen.call(null)
    return new Promise((resolve, reject) => {
        auto(g, '', resolve, reject)
    })
}

_async(forever).then(r => {
    console.log('Res:', r)
}).catch(err => {
    console.log('Err', err)
})