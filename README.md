<strong>Creating Node Package</strong>

<p>This is a simple exmaple of creating node pakcage.</p>
<div>I am creating a simple node package 'hello-world-node-package'</div>
<i>index.js</i>
<pre>
function helloWorld() {
console.log('Hello World!');
}
</br>
function doSomethingAwesome() {
 console.log('Doing something awesome...');	
}
</br>
function doSomethingElse() {
 console.log('Now something else...');	
}
</br>
module.exports = {
 helloWorld: helloWorld,
 doSomethingAwesome: doSomethingAwesome,
 doSomethingElse: doSomethingElse
}
</pre>
