const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.send('Hello World! Hieu')
})

app.get('/hoidanit', (req, res) => {
    // res.send('ABC')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})