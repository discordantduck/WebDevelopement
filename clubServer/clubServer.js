const host = '127.0.0.1';
const port = 3015;

const session = require('express-session');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); 
const nunjucks = require('nunjucks');
nunjucks.configure(path.join(__dirname, 'templates'),
{
    autoescape: true,
    express: app
});
const urlencodedParser = express.urlencoded({extended: true});

const nRounds = 13;
const activities = require('./eventData.json');
const clubUsers = require('./clubUsersHash.json');

let memberApplications = [];

app.get('/', function (req, res)
{
    res.render('index.njk');
});

app.get('/activities', function(req, res)
{
    res.render('activities.njk', {events: activities});
});

app.get('/addActivityForm', function(req, res)
{
    res.render('addActivityForm.njk');
});

app.post('/addActivityForm', urlencodedParser, function(req, res)
{
});

app.get('/login', function(req, res)
{
    res.render('login.njk');
});

app.post('/login', urlencodedParser, function(req, res)
{
    let i = clubUsers.findIndex(function(element)
    {
        console.log(element);
        return element.user_email == req.body.user_email;
    });

    if(bcrypt.compareSync(req.body.user_password, clubUsers[i].user_password))
    {
        res.render('welcome.njk', req.body);
    }
    else
    {
        res.render('loginProblem.njk');
    }
});

app.get('/membership', function(req, res)
{
    res.render('membership.njk');
});

app.post('/membership', urlencodedParser, function(req, res)
{
    console.log('Membership signup called');
    const salt = bcrypt.genSaltSync(nRounds);
    req.body.user_password = bcrypt.hashSync(req.body.user_password, salt);
    memberApplications.push(req.body);
    fs.writeFileSync("clubUsersHash.json", JSON.stringify(memberApplications, null, 2));
    console.log(memberApplications);
    res.render('thanks.njk', req.body);
});

app.get('/serverId', function(req, res)
{
    let temp =
    {
        "studentName": "Leo",
        "netId": "ti2236",
        "message": "hello world"
    };
    res.send(temp);
});

app.listen(port, host, function ()
{
    console.log(`Club app listening on IPv4: ${host}:${port}`);
});