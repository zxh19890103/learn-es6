let count = {
    __c__ : 0,
    [Symbol.iterator]() {
        let v = 0
        return {
            next() {
                v = v + 1
                return { done: false, value: v }
            }
        }
    }
}

let N = 0
for (let n of count) {
    N ++
    if (N > 5) break
    console.log(n)
}