const mssql = require('mssql')

const connectionsSQLServer = {
    user: process.env.SQLSERVER_USER,
    password: process.env.SQLSERVER_PASSWORD,
    database: process.env.SQLSERVER_DATABASE,
    server: process.env.SQLSERVER_HOST,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

async function query(sql, params) {
    try {
        await mssql.connect(connectionsSQLServer)
        const results = await mssql.query(sql)
        return results
    } catch (error) {
        return { err: JSON.stringify(error) }
    }
}

module.exports = {
    query
}