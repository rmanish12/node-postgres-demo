const pg = require('pg')

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'abcd@1234',
    port: '5432'
})

module.exports = pool