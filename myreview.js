var body=document.getElementsByTagName('body')[0]
console.log("XSS EXECUTED");

body.innerHTML = "<h1>Hello World</h1>";

