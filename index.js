const pool = require('./dbconfig')

// pool.query("select now()", (err, res) => {
//     console.log(err, res)
//     pool.end()
// })

// pool.query("create table users(id serial primary key, firstname varchar(40), age int)", (err, res) => {
//     console.log(err, res)
//     pool.end()
// })

pool.query("insert into users values(1, 'testUser', 20)", (err, res) => {
    console.log(err, res)
    pool.end()
})