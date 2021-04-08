const express = require('express');
const app = express();
let date = new Date();
let name = "Leo L.";
let netID = "ti2236";
let count = 0;

app.get('/merge', function (req, res) {
    count++;
    let temp = 'AM';
    if(date.getHours() > 12)
    {
        temp = 'PM';
    }
    res.send('Name: ' + name + ', ' + 'NetID: ' + netID + ' number of visits: ' + count + "\n"
             +
             'Date and Time: ' + date.getMonth() + '/'
                               + date.getDate() + '/'
                               + date.getFullYear() + ' '
                               + date.getHours() + ':'
                               + date.getMinutes() + ':'
                               + date.getSeconds() + ' '
                               )
});

host = '127.0.0.4';
port = '2003';
app.listen(port, host, function () {
console.log(`Merge app listening on IPv4: ${host}:${port}`);
});