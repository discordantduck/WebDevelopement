<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="club.css">
    <title>Login</title>
</head>

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
