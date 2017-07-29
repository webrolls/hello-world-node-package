<strong>Creating Node Package</strong>
<p>This is a simple exmaple of creating node pakcage.</p>
To create a node package 
<ul>
<li>Create a folder say 'hello-world-node-package'</li>
<li>Under this filder create package.json - you can create package.json manually or run 'npm init' to auto generate the file.</li>
<li>My package.json looks something like this
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
<li>In the same folder create index.js and add all your package logic in this file.</li>
<li>For example for 'hello-world-node-package' package I have following JavaScript
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
<li>Now when you are done with the package implimentation its a time to publish the package... </li>
<li>To publish the package run <pre>npm adduser</pre></li>
<li>It will prompt to ask your your name, password and your email id, provide the information and hit enter...</li>
<li>Verify your email address from npm site</li>
<li>Once the email id is confirmed, you can now publish the package using using ... <pre>npm publish<pre></li>
<li>If everything went as expected your package is added to the NPM</li>
<li>You can confirm that the package is added successfuly by visiting https://www.npmjs.com/~your-user-name</li>
<li>Thats all, we are done adding the package and its ready to used and download.</li>
</ul>

To verify if out package is working fine, you can install the package using
<pre>
npm install --save
</pre>

create a file 'index.js' and add
<pre>
var test = require('hello-world-node-package');

test.helloWorld();
test.doSomethingAwesome();
test.doSomethingElse();
</pre>

and bingo! on the console we will see the following output

<pre>
Hello World!
Doing something awesome...
Now something else...
</pre>

~peace ~webrolls

