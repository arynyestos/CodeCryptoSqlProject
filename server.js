const ex = require('express')
require('dotenv').config()
const mysql = require("./BBDD/mysql")
const pg = require("./BBDD/pg")
const sqlServer = require("./BBDD/sqlserver")

const server = ex()

server.get("/ping", (req, res) => {
    res.send({ date: new Date().toISOString() })
})

server.get("/customersMysql", async (req, res) => {
    mysql.query("select * from Customers").then((results) => {
        res.send(results)
    }).catch(e => {
        res.send(e)
    })
})

server.get("/customersPostgresql", async (req, res) => {
    pg.query("select * from Customers").then((results) => {
        res.send(results)
    }).catch(e => {
        res.send(e)
    })
})

server.get("/customersPostgresql2", async (req, res) => {
    try {
        const results = await pg.query("select * from Customers")
        res.send(results)
    } catch (error) {
        res.send(error)
    }
})

server.get("/customersSqlserver", async (req, res) => {
    try {
        const results = await sqlServer.query("select * from Customers")
        res.send(results)
    } catch (error) {
        res.send(error)
    }
})

server.listen(5555, () => {

})

