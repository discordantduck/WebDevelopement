const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); 
const nunjucks = require('nunjucks');
nunjucks.configure(path.join(__dirname, 'templates'), {
    autoescape: true,
    express: app
});

const host = '127.0.0.2';
const port = 3001;

let count = 0;
let startDate = new Date();
let yourName = 'Leo L.';
let netId = '2236';

app.get('/', function (req, res) {
    count++;
    let info = {host: host, port: port, count: count, startDate: startDate.toLocaleString(), yourName: yourName, netId: netId}
    res.render('default.njk', info);
});

let temp = new Date(Date.now());

app.get('/uptime', function(req, res){
    let temp2 = new Date();
    let info = {host: host, port: port, startTime: temp, currentTime: temp2}
    res.render('uptime.njk', info);
});

app.listen(port, host, function () {
    console.log(`deployTest app listening on IPv4: ${host}:${port}`);
});