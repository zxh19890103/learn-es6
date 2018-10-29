setTimeout(() => {
    console.log(Date.now())
    let N = 0
    while(N < 100000) {
        // do nothing
        N ++
    }
}, 1000);

setTimeout(() => {
    console.log(Date.now())
}, 1500);