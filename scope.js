function outputNumbers(count) {
    for (var index = 0; index < count; index++) {
        console.log(index)
    }
    var index
    var index
    console.log(index)
}

// outputNumbers(5)

// +function () {
//     console.log('haha')
// } ()

function a() {
    throw Error('Hello, Error')
}

function b() {
    a()
}

b()