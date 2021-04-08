const express = require('express');
const app = express();
let date = new Date();

app.get('/date', function (req, res) {
    let temp = 'AM';
    if(date.getHours() > 12)
    {
        temp = 'PM';
    }
    res.send('Date and Time: ' + date.getMonth() + '/'
                               + date.getDate() + '/'
                               + date.getFullYear() + ' '
                               + date.getHours() + ':'
                               + date.getMinutes() + ':'
                               + date.getSeconds() + ' '
                               )
});

host = '127.0.0.2';
port = '2000';
app.listen(port, host, function () {
console.log(`Date and Time app listening on IPv4: ${host}:${port}`);
});