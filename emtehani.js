
var url =require('url');
var adr =' https://www.w3schools.com/nodejs/nodejs_url.asp';
var m =url.parse(adr,true);
console.log(m.host);
console.log(m.pathname);
console.log(m.query);

