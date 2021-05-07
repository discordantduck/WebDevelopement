const host = '127.0.0.1';
const port = 3015;

const fs = require('fs');
const bcrypt = require('bcryptjs');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const session = require('express-session');
const cookieName = "clubsid";
app.use(session(
{
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName
}));
const setUpSessionMiddleware = function (req, res, next)
{
    if(!req.session.user)
    {
        req.session.user = {loggedin: false};
    }
    next();
};
app.use(setUpSessionMiddleware);
const checkLoggedInMiddleware = function (req, res, next)
{
    if(!req.session.user.loggedin)
    {
        res.render("forbidden.njk", {user: req.session.user});
    }
    else
    {
        next();
    }
};
const checkAdminMiddleware = function (req, res, next)
{
    if((!req.session.user.loggedin || req.session.user.role != 'admin'))
    {
        res.render("forbidden.njk", {user: req.session.user});
    }
    else
    {
        next();
    }
};
const nunjucks = require('nunjucks');
nunjucks.configure(path.join(__dirname, 'templates'),
{
    autoescape: true,
    express: app
});
const urlencodedParser = express.urlencoded({extended: true});




let clubUsers = require('./clubUsersHash.json');
let clubEvents = require('./eventData.json');

app.get('/', function (req, res)
{
    res.render('index.njk', {user: req.session.user});
});

app.get('/events', function(req, res)
{
    res.render('events.njk', {events: clubEvents, user: req.session.user});
});

app.get('/addEvent', checkLoggedInMiddleware, function(req, res)
{
    res.render('addEvent.njk', {user: req.session.user});
});

app.post('/addEvent', urlencodedParser, function(req, res)
{
    let temp =
    {
        "name": req.body.name,
        "date": req.body.date,
        "description": req.body.description
    };

    clubEvents.push(temp);
    if(clubEvents.length > 100)
    {
        clubEvents.shift();
    }
    
    res.render('events.njk', {events: clubEvents, user: req.session.user});
});

app.get('/logout', function (req, res, next)
{
    let options = req.session.cookie;
    req.session.destroy(function(err)
    {
        res.clearCookie(cookieName, options);
        res.render("logout.njk");
    })
});

app.get('/login', function(req, res)
{
    res.render('login.njk', {user: req.session.user});
});

app.post('/logon', urlencodedParser, function(req, res)
{
    let email = req.body.email;
    let password = req.body.password;
    let auser = clubUsers.users.find(function(user)
    {
        return user.email === email
    });
    if(!auser)
    {
        res.render("loginError.njk", {user: req.session.user});
        return;
    }
    let verified = bcrypt.compareSync(password, auser.password);
    if(verified)
    {
        let oldInfo = req.session.user;
        req.session.regenerate(function(err)
        {
            if(err)
            {
                console.log(err);
            }
            req.session.user = Object.assign(oldInfo, auser,
            {
                loggedin: true,
                role: auser.role
            });
            res.render("welcome.njk", {user: req.session.user});
        });
    }
    else
    {
        res.render("loginError.njk", {user: req.session.user});
    }
});

app.get('/membership', function(req, res)
{
    res.render('membership.njk', {user: req.session.user});
});

app.post('/signUp', urlencodedParser, function(req, res)
{
    const nRounds = 13;
    const salt = bcrypt.genSaltSync(nRounds);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    req.body.role = 'member';
    clubUsers.users.push(req.body);
    res.render('thanks.njk', req.body);
});

app.get('/users', checkAdminMiddleware, function (req, res)
{
    res.render('users.njk', {users: clubUsers.users, user: req.session.user});
});

app.get('/serverId', function(req, res)
{
    let temp =
    {
        "studentName": "Leo",
        "message": "hello there"
    };
    res.send(temp);
});

app.listen(port, host, function ()
{
    console.log(`Club app listening on IPv4: ${host}:${port}`);
});