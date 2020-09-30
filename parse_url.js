
var url =require('url');
var adr = 'http://localhost:8080/file.htm?hour=12&minute=51';
var m =url.parse(adr,true);
var mdata = m.query
console.log(m.host);
console.log(m.pathname);
console.log(m.query);
console.log(mdata.hour);
console.log(mdata.minute);
