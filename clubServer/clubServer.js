const host = '127.0.0.1';
const port = 3000;

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

let memberApplications = [];

app.get('/', function (req, res)
{
    res.render('index.njk');
});

app.get('/activities', function(req, res)
{
    res.render('activities.njk');
});

app.get('/login', function(req, res)
{
    res.render('login.njk');
});

app.get('/membership', function(req, res)
{
    res.render('membership.njk');
});

app.post('/membershipSignup', urlencodedParser, function(req, res)
{
    console.log('Membership signup called');
    delete req.body.user_password;
    memberApplications.push(req.body);
    console.log(memberApplications);
    res.render('thanks.njk', req.body);
});

app.listen(port, host, function ()
{
    console.log(`Club app listening on IPv4: ${host}:${port}`);
});