var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'Login_info',
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Connection failure");
    }
});

module.exports = mysqlConnection;