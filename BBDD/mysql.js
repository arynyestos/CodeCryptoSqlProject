const mysql = require("mysql8")

var connectionsMySql = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MSQL_HOST,
    user: process.env.MSQL_USER,
    password: process.env.MSQL_PASSWORD,
    database: process.env.MSQL_DATABASE
});

function query(sql, parameters) {
    return new Promise((resolve, reject) => {
        connectionsMySql.query(sql, parameters, function (error, results, fields) {
            if (error) reject(error);
            return resolve([results, fields]);
        });
    });
}

module.exports = {
    query
}