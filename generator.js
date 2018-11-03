function *forever() {
    let v = 0
    for(;;) {
        let w = v + 1
        yield w
    }
}

const g = forever()
console.log(g.next())
console.log(g.return())