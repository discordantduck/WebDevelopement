import React from "react";
import events from "./eventData.json"

function Events()
{
    let rows = events.map(function(u)
    {
        return <tr key={u.name}><td>{u.date}</td><td>{u.description}</td></tr>;
    });
      
    let eventTable =
    <table className="myTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>;

    return eventTable;
}

export default Events;