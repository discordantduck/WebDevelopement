// deployTest.js
const express = require('express');
const app = express();
const port = 3001; // !!! WARNING YOU MUST CONFIGURE THIS CORRECTLY WHEN WE DEPLOY !!!

const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

let count = 0; // Visit count
let startDate = new Date(); // Server start Date time
let yourName = "Leo L.";
let netId = "2236";

app.get('/', function (req, res) {
    count++;
    res.send(`Hi from ${yourName}, NetId: ${netId}, Visited: ${count} times.`);
});

app.get('/uptime', function(req, res){
    let curDate = new Date();
    res.send(`Current Date/Time: ${curDate.toLocaleString()}, Server Up Since: ${startDate.toLocaleString()}`);
})