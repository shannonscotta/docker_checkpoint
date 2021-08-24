const express = require('express');

const app = express();
const port = 8081;
const cors = require('cors')

app.use(cors());


const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://admin:password@db:5432/postgres'
})

app.get('/', (req, res) => {
    res.send(200, 'this is the root')
})

app.get('/users', (request, response) => {
    //response.send("Welcome to your Dockerized Express/React full-stack app!")
    knex
    .select('*')
    .from('users')
    .then(data => response.send(200, data))
    .catch(err => response.send(404, err))
});

app.listen(port, () => {
    console.log(`Express server listening on port http://localhost:${port}`)
});
