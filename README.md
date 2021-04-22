# Homework #10 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
``` javascript
const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');

let nRounds = 10;
let hashedUsers = [];
let start = new Date(); // timing code

console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

for(let i in users.users)
{
    const salt = bcrypt.genSaltSync(nRounds);
    const hash = bcrypt.hashSync(users.users[i].password, salt);
    hashedUsers[i] = hash;
}

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));
```
```
[
  "$2a$10$I0.mPql.KxCtRwCEaYTIceM5JTJK6HRdMfRrTe6/R/Gw4jgczxaMS",
  "$2a$10$lfR5xiMlKbWBtMw7oy4d5eMuzNl.EXwAcMEgff8KIAtVUcuIynmV.",
  "$2a$10$S5397ukDd9tWxYFgqAKqc.jBK1t1Y4ZGEeokDrbWqdWwXFbvAGOGi",
  ...
]
```
## (b)
![1b](/images/1b.PNG)
## (c)
``` javascript
app.post('/membershipSignup', urlencodedParser, function(req, res)
{
    console.log('Membership signup called');
    const salt = bcrypt.genSaltSync(nRounds);
    req.body.user_password = bcrypt.hashSync(req.body.user_password, salt);
    memberApplications.push(req.body);
    fs.writeFileSync("clubUsersHash.json", JSON.stringify(memberApplications, null, 2);
    console.log(memberApplications);
    res.render('thanks.njk', req.body);
});
```

## Question 2
## (a)
``` html
<form action="login" method="post">
    <fieldset>
        <div>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="user_email">
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="user_password">
        </div>
        <div><button type="submit">Login</button></div>
    </fieldset>
</form>
```
## (b)
``` javascript
app.post('/login', urlencodedParser, function(req, res)
{
    let i = users.findIndex(function(element)
    {
        console.log(element);
        return element.user_email == req.body.user_email;
    });

    if(bcrypt.compareSync(req.body.user_password, users[i].user_password))
    {
        console.log("true");
    }

    console.log("reached the end");
});
```
## (c)
![2c](/images/2c.PNG)
## (d)
![2d](/images/2d.PNG)

## Question 3
## (a)
![3a](/images/3a.PNG)
## (b)
``` javascript
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
    res.render('activities.njk', {events: activities});
});
```

## Question 4
## (a)
``` javascript
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
        res.render("loginProblem.njk", {user: req.session.user});
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
                role: 'admin'
            });
            res.render("welcome.njk", {user: req.session.user});
        });
    }
    else
    {
        res.render("loginProblem.njk", {user: req.session.user});
    }
});
```
## (b)
``` javascript
app.get('/logout', checkLoggedInMiddleware, function (req, res, next)
{
    let options = req.session.cookie;
    req.session.destroy(function(err)
    {
        res.clearCookie(cookieName, options);
        res.render("logout.njk");
    })
});
```
## (c)
![4c](/images/4c.PNG)

## Question 5
## (a)
![5a](/images/5a.PNG)
## (b)
![5b](/images/5b.PNG)
## (c)
![5c](/images/5c.PNG)
## (d)