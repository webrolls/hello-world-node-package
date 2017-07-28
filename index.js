function helloWorld() {
	console.log('Hello World!');
}

function doSomethingAwesome() {
	console.log('Doing something awesome...');	
}

function doSomethingElse() {
	console.log('Now something else...');	
}

module.exports = {
	helloWorld: helloWorld,
	doSomethingAwesome: doSomethingAwesome,
	doSomethingElse: doSomethingElse
}