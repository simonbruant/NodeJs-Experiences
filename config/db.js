let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bdd1'
});

connection.connect();


module.exports = connection
