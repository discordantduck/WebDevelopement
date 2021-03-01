# Homework #5 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
``` javascript
    let leastPop = document.querySelector("#LeastPop ol");

    function orderByPop(stateA, stateB)
    {
        return stateA.population - stateB.population;
    }

    states.sort(orderByPop);

    let fiveLeast = states.slice(0,5);

    function makeLeastPop(state)
    {
        let temp = document.createElement("li");
        let content = `<p>${state.state}, code: ${state.code}, population: ${state.population}, capital: ${state.capital_city}</p>`
        temp.innerHTML = content;
        leastPop.appendChild(temp);
    }

    fiveLeast.forEach(makeLeastPop);
```
## (b)
``` javascript
    let abbrGame = document.querySelector("#AbbrGame div");

    function makeAbbrGame(state)
    {
        let temp = document.createElement("article");
        let content = `<p>${state.state}</p> <input id="${state.code}" type="text"><p><small title="${state.code}">Hint</small></p>`;
        temp.innerHTML = content;
        abbrGame.appendChild(temp);
    }

    states.forEach(makeAbbrGame);
```
## (c)

## Question 2
## (a)
![2a.png](images/2a.PNG)
## (b)
``` html
<nav>
    <ul>
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="club_activities.html">Activities</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="application.html">Application</a></li>
    </ul>
</nav>
```

``` css
nav
{
    background-color: silver;
    border-style: solid;
    position: fixed;
    top: 0px;
    left: 25px;
    right: 25px;
}

nav ul
{
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
}
```

![2b.png](images/2b.PNG)

## Question 3
## (a)
em, because it scales relative to the parent

``` css
main
{
    background-color: silver;
    border-style: solid;
    margin: 10px;
    padding: 10px;
    margin-top: 50px;
    max-width: 80%;
}
```

## (b)
``` css
body
{
    background-color: gray;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```
![3b.png](images/3b.PNG)
## Question 4
## (a)
``` css
main form
{
    display: grid;
    grid-row-gap: 0.5em;
    grid-column-gap: 0.5em;
}
```

![4a.png](images/4a.PNG)
## (b)
``` html
<form>
    <header>
        <h1>Application</h1>
    </header>
    
    <label>Name</label>
    <input id="application_name" type="name" minlength="1" maxlength="100" required></input>

    <label>Email</label>
    <input id="application_email" type="email" minlength="5" maxlength="100" required></input>

    <label>Password</label>
    <input id="application_password" type="password" minlength="8" maxlength="100" required></input>

    <select id="newsletter">
        <option>Annoy me with newsletters</option>
        <option>Please don't</option>
    </select>

    <button id="signup_button">Sign Up</button>
</form>
```

``` css
main form
{
    display: grid;
    grid-row-gap: 0.5em;
    grid-column-gap: 0.5em;
}
```

![4b.png](images/4b.PNG)
## (c)
https://csweb01.csueastbay.edu/~ti2236/clubProject/index.html