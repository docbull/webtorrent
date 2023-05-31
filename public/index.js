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

app.use('/', function(req, res) {
    res.render('index.html');
})

app.use(express.static(path.join(__dirname, '/')));

https.createServer(options, app).listen(app.get('HTTPS_PORT'));