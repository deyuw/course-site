var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8080);
// connect().use(connect.static("http://192.168.1.1")).listen(8080);