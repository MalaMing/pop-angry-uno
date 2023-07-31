const express = require('express')
const path = require('path')
const app = express()
const port = 2703

app.set("view engine", "ejs");
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})