const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gopusav@1234',
    database: 'test'
});

connection.connect((err) => {
    if(err){
        console.warn(err);
    } 
    // else {
    //     console.log('connected');
    // }
});

module.exports = connection;