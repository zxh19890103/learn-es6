const foo = () => {
    const state = {
        name: 'singhi',
        age: 29,
        job: 'programmer',
        workAge: 5
    }
    return (key) => {
        return state[key]
    }
}

// state is privacy
const bar = foo()
console.log('yes the name defined inside is', bar('name'))
console.log('whenever you want the value of state, just access it by index.')
setTimeout(() => {
    console.log('3 secs later.')
    console.log('even though the inner function has been executed, you can still get the state')
    console.log('the job of', bar('name') ,'is', bar('job'))
}, 3000)