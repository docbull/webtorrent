const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const app = express();

// const dragDrop = require('drag-drop');
// const WebTorrent = require('webtorrent');
// const client = new WebTorrent();

// dragDrop('body', function (files) {
//     console.log('asdf')
//     client.seed(files, function (torrent) {
//         console.log('Client is seeding ' + torrent.magnetURI);
//     })
// })

app.use(cors());

app.set('HTTPS_PORT', 3000);
const options = {
    key: fs.readFileSync('./ssl/rootca.key'),
    cert: fs.readFileSync('./ssl/rootca.crt')
}

// const router = require('../route/router')(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/'));
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/1', function(req, res) {
    res.render('index1.html');
})
app.use('/2', function(req, res) {
    res.render('index2.html');
})
app.use('/3', function(req, res) {
    res.render('index3.html');
})
app.use('/4', function(req, res) {
    res.render('index4.html');
})
app.use('/5', function(req, res) {
    res.render('index5.html');
})
app.use('/6', function(req, res) {
    res.render('index6.html');
})
app.use('/7', function(req, res) {
    res.render('index7.html');
})
app.use('/8', function(req, res) {
    res.render('index8.html');
})
app.use('/9', function(req, res) {
    res.render('index9.html');
})
app.use('/10', function(req, res) {
    res.render('index10.html');
})
app.use(express.static(path.join(__dirname, '/')));

https.createServer(options, app).listen(app.get('HTTPS_PORT'));