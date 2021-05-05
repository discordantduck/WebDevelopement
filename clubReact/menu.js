import React from "react";

function Menu(props)
{
    switch(props.state.role)
    {
        case "guest":
            return (
            <nav>
                <ul>
                    <li><a onClick={props.method.homeHandler}>Home</a></li>
                    <li><a onClick={props.method.eventsHandler}>Events</a></li>
                    <li><a onClick={props.method.membershipHandler}>Membership</a></li>
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
                </ul>
            </nav>
            );
        default:
            return (<h1>Something went wrong</h1>);
    }
}

export default Menu;