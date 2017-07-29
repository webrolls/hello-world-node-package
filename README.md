<strong>Creating Node Package</strong>

<p>This is a simple exmaple of creating node pakcage.</p>
To create a node package 
<ul>
<li>create a folder say 'hello-world-node-package'</li>
<li>create package.json - you can create package.json manually or run 'npm init' to auto generate it.
<pre>
{
  "name": "hello-world-node-package",
  "version": "1.0.1",
  "description": "Creating Node Package. This is a simple exmaple of creating node pakcage.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "KK",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/webrolls/hello-world-node-package.git"
  },
  "bugs": {
    "url": "https://github.com/webrolls/hello-world-node-package/issues"
  },
  "homepage": "https://github.com/webrolls/hello-world-node-package#readme"
}

</pre>
</li>
<li>create index.js</li>
<li>add your package logic into index.js</li>
<li>for example for 'hello-world-node-package' we have following JavaScript
<pre>
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
</pre>
</li>
<li>to publish the package to node site, run... 
<pre>npm adduser</pre></li>
<li>it will prompt to ask your your name, password and your email id, provide the information and hit enter...</li>
<li>verify your email address from npm site</li>
<li>once the email id is confirmed, you can now publish the package using following command.<pre>npm publish<pre></li>
<li>Done!</li>
</ul>

Thank You

Kaleem

