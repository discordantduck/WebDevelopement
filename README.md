# Homework #3 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
## (b)
## (c)

## Question 2
## (a)
## (b)
``` html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="club_activities.html">Activities</a></li>
        <li><a href="login.html">Login</a></li>
        <li class="active"><a href="application.html">Application</a></li>
    </ul>
</nav>
```

## Question 3
## (a)
``` html
<main>
    <form>
        <header>
            <h1>Login</h1>
        </header>
        
        <label>Email</label>
        <input id="email" type="email"></input>

        <label>Password</label>
        <input type="password"></input>

        <button id="login_button">Login</button>
    </form>

    <p id="message"></p>
</main>
```
## (b)
``` javascript
<script>
    let email_address = document.getElementById("email");
    document.getElementById("login_button").addEventListener("click", myEvent);

    function myEvent()
    {
        event.preventDefault();

        let message = document.getElementById("message");
        message.innerHTML = "Welcome, " + email_address.value + ", this site is currently under construction";
        message.classList.add("message_style");
    }
</script>
```

## Question 4
## (a)
## (b)
## (c)