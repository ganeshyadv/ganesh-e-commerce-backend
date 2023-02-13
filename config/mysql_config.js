const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.dbPass,
    database: process.env.dbName
});

connection.connect(function (error) {
    if (error) {
        console.log("database connection error", error);
    } else {
        console.log("database connected");
    }
});

module.exports.connection = connection;