const { Pool } = require('pg')

const connectionsPg = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})

async function query(sql, params) {
    return new Promise(async (resolve, reject) => {
        connectionsPg.connect((err, client, done) => {
            if (err) reject(err) // Se puede rechazar porque haya habido un error en la consulta
            client.query(sql, params, (err, result) => {
                done()
                if (err) {
                    reject(err) // O se puede rechazar porque haya habido un error en la ejecución de la consulta
                } else {
                    resolve(result.rows)
                }
            })
        })
    })
}

module.exports = {
    query
}