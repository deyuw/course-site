// used for testing purposes
var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8080, '192.168.1.123');

// instruction
// make sure network is has same ip address as one above
// in terminal > node server.js
// in browser: [ip address:8080/index.html]