const host = '127.0.0.1';
const port = 3015;

const cookieName = "clubsid";
const nRounds = 13;
const activities = require('./eventData.json');
const clubUsers = require('./clubUsersHash.json');

let memberApplications = [];

const fs = require('fs');
const bcrypt = require('bcryptjs');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const session = require('express-session');
app.use(session(
{
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName
}));
const setUpSessionMiddleware = function (req, res, next)
{
    console.log(req.session.user);
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
        res.render("./forbidden.njk");
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

app.get('/', function (req, res)
{
    res.render('./index.njk', {user: req.session.user});
});

app.get('/activities', function(req, res)
{
    res.render('./activities.njk', {events: activities, user: req.session.user});
});

app.get('/addActivityForm', checkLoggedInMiddleware, function(req, res)
{
    res.render('./addActivityForm.njk', {user: req.session.user});
});

app.post('/addActivityForm', urlencodedParser, function(req, res)
{
    let temp =
    {
        "name": req.body.activity_name,
        "date": req.body.activity_date,
        "description": req.body.activity_description
    };
    activities.events.push(temp);

    if(activities.length > 100)
    {
        activities.shift();
    }
    res.render('./activities.njk', {events: activities});
});

app.get('/logout', checkLoggedInMiddleware, function (req, res, next)
{
    let options = req.session.cookie;
    req.session.destroy(function(err)
    {
        res.clearCookie(cookieName, options);
        res.render("./logout.njk");
    })
});

app.get('/login', function(req, res)
{
    res.render('./login.njk', {user: req.session.user});
});

app.post('/login', urlencodedParser, function(req, res)
{
    let email = req.body.user_email;
    let password = req.body.user_password;
    let auser = clubUsers.find(function(user)
    {
        return user.user_email === email
    });
    if(!auser)
    {
        res.render("./loginProblem.njk", {user: req.session.user});
        return;
    }
    let verified = bcrypt.compareSync(password, auser.user_password);
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
                role: 'member'
            });
            res.render("./welcome.njk", {user: req.session.user});
        });
    }
    else
    {
        res.render("./loginProblem.njk", {user: req.session.user});
    }
});

app.get('/membership', function(req, res)
{
    res.render('./membership.njk', {user: req.session.user});
});

app.post('/membership', urlencodedParser, function(req, res)
{
    console.log('Membership signup called');
    const salt = bcrypt.genSaltSync(nRounds);
    req.body.user_password = bcrypt.hashSync(req.body.user_password, salt);
    memberApplications.push(req.body);
    fs.writeFileSync("./clubUsersHash.json", JSON.stringify(memberApplications, null, 2));
    console.log(memberApplications);
    res.render('./thanks.njk', req.body);
});

app.get('/users', checkLoggedInMiddleware, function (req, res)
{
    res.render('./users.njk', {users: clubUsers, user: req.session.user});
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