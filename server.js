var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8080, '192.168.1.102');