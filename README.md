# Homework #10 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
## (b)
``` javascript
render()
{
    let content = <Home />;
    switch(this.state.show)
    {
        case "home":
            content = <Home />;
            break;
        case "events":
            content = <Events events={this.state.events}/>;
            break;
        case "membership":
            content = <Membership />;
            break;
        case "adminActivity":
            content = <AdminActivity method={this} events={this.state.events} />;
            break;
        default:
            content = (<h1>Something went wrong with render()</h1>);
    }
    return (
    <>
        <Menu method={this} state={this.state}/>
        {content}
    </>
    );
}
```
![1b](/images/1b.PNG)

## Question 2
## (a)
* guest: home, events, membership, login
* user: home, events, membership, logout
* admin: home, events, membership, admin activity, logout
## (b)
![2b_user](/images/2b_user.PNG)
![2b_guest](/images/2b_guest.PNG)

## Question 3
## (a)
I have to add states to handle which page should currently be shown, add a handler for
displaying those pages, and then have conditional statements in render() to display the
appropriate page when the state has been changed

``` javascript
<Menu method={this} state={this.state}/>
```
## (b)
Conditional statements were added to change the menu based on the user's role, then the
prop's handler method is called to change the App's state
``` javascript
switch(props.state.role)
{
    case "guest":
        return (
        <nav>
            <ul>
                <li><a onClick={props.method.homeHandler}>Home</a></li>
                <li><a onClick={props.method.eventsHandler}>Events</a></li>
                <li><a onClick={props.method.membershipHandler}>Membership</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
        );
    case "user":
        return (
        <nav>
            <ul>
                <li><a onClick={props.method.homeHandler}>Home</a></li>
                <li><a onClick={props.method.eventsHandler}>Events</a></li>
                <li><a onClick={props.method.membershipHandler}>Membership</a></li>
                <li><a>Logout</a></li>
            </ul>
        </nav>
        );
    case "admin":
        return (
        <nav>
            <ul>
                <li><a onClick={props.method.homeHandler}>Home</a></li>
                <li><a onClick={props.method.eventsHandler}>Events</a></li>
                <li><a onClick={props.method.membershipHandler}>Membership</a></li>
                <li><a onClick={props.method.adminActivityHandler}>Admin Activity</a></li>
                <li><a>Logout</a></li>
            </ul>
        </nav>
        );
    default:
        return (<h1>Something went wrong with Menu()</h1>);
```

## Question 4
## (a)
![4a](/images/4a.PNG)
## (b)
![4b](/images/4b.PNG)
## (c)
![4c](/images/4c.PNG)
## (d)
``` javascript
constructor(props)
{
    super(props);
    this.state = {eventName: "", eventDate: "", eventDescription: ""};
}
```
## (e)
``` javascript
render()
{
    return (
    <main>
        <h1>Activity Management</h1>
        <details>
            <summary>Add Activity</summary>
            <div>
                <label>Name</label>
                <input type="text" value={this.state.eventName} onChange={this.nameHandler.bind(this)}/>
                <label>Date</label>
                <input type="text" value={this.state.eventDate} onChange={this.dateHandler.bind(this)} />
                <label>Description</label>
                <input type="text" value={this.state.eventDescription} onChange={this.descriptionHandler.bind(this)} />
                <button onClick={this.addEvent.bind(this)}>Add</button>
            </div>
        </details>
        <h2>Events</h2>
        <ActivityTable events={this.props.events} />
    </main>
    );
}
```
## (f)
``` javascript
nameHandler(event)
{
    this.setState({eventName: event.target.value});
}
dateHandler(event)
{
    this.setState({eventDate: event.target.value});
}
descriptionHandler(event)
{
    this.setState({eventDescription: event.target.value});
}
addEvent()
{
    let event = {name: this.state.eventName, date: this.state.eventDate, description: this.state.eventDescription};
    this.props.method.addEventHandler(event);
}
```