const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const { index } = require('./routes/index.js');

app.use('/static', express.static('public'))

app.get('/', (req, res) => {

    res.write(index);
    res.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})