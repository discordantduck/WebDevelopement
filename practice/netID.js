const express = require('express');
const app = express();
let name = "Leo L.";
let netID = "ti2236";
let count = 0;

app.get('/netID', function (req, res) {
    count++;
    res.send('Name: ' + name + ', ' + 'NetID: ' + netID + ' number of visits: ' + count);
});

host = '127.0.0.3';
port = '2001';
app.listen(port, host, function () {
console.log(`NetID app listening on IPv4: ${host}:${port}`);
});