const promise = new Promise((fulfill, reject) => {
    console.log('yes this is running.')
	fulfill('hello, world')
})

setTimeout(() => {
	console.log('2 sec later.')
	promise.then(val => {
  	console.log('Yes the promise is there!')
  })
}, 2000)

console.log('please wait for 2 secs.')