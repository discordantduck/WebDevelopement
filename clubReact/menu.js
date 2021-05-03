import React from "react";

function Menu()
{
    let menu =
    (
        <nav>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="events">Events</a></li>
                <li><a href="addEvent">Add Event</a></li>
                <li><a href="users">Members</a></li>
                <li><a href="logout">Logout</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="membership">Membership</a></li>
            </ul>
        </nav>
    );

    return menu;
}

export default Menu;