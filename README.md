# Homework #9 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
![1a](/images/1a.PNG)
## (b)
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {% block metaStuff %}
        {% endblock %}
        <link href="club.css" rel="stylesheet">
    </head>

    <body>
        <nav>
            {% include "menu.html" %}
        </nav>

        <main>
            {% block main %}
            {% endblock %}
        </main>
        
        <footer>
            <p>Copyright @ 2021 Leo Lin</p>
        </footer>
    </body>
</html>
```
## (c)
![1c](/images/1c.PNG)
## (d)
``` html
{% extends "clubBase.njk" %}

{% block metaStuff %}
    <title>Login</title>
{% endblock %}
    
{% block main %}
    <main>
        <form>
            <header>
                <h1>Login</h1>
            </header>
            
            <label>Email</label>
            <input id="email" type="email" required></input>

            <label>Password</label>
            <input type="password" required></input>

            <button id="login_button">Login</button>
        </form>

        <p id="message"></p>
    </main>
{% endblock %}
```
## (e)
``` html
{% extends "clubBase.njk" %}

{% block metaStuff %}
    <title>Membership</title>
{% endblock %}
    
{% block main %}
    <main>
        <form action="/membershipSignup" method="post">
            <fieldset>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name">
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="user_email">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="user_password">
                </div>
                <div>
                    <label for="msg">Message:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </div>
                <div><button type="submit">Send your message</button></div>
            </fieldset>
        </form>
    </main>
{% endblock %}
```
## (f)
``` html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="activities">Activities</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="membership">Membership</a></li>
    </ul>
</nav>
```

## Question 2
## (a)
## (b)
## (c)

## Question 3
## (a)
![3a](/images/3a.PNG)
## (b)
![3b](/images/3b.PNG)
## (c)
``` javascript
app.post('/membershipSignup', urlencodedParser, function(req, res)
{
    console.log('Membership signup called');
    delete req.body.user_password;
    memberApplications.push(req.body);
    console.log(memberApplications);
    res.render('thanks.njk', req.body);
});
```
![3c](/images/3c.PNG)

## Question 4
## (a)
## (b)