const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs');
app.use( bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', function (req, res) {
    console.log(req.body);
    res.render('index');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}":${port}/`);
})