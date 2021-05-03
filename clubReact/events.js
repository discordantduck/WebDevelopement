import React from "react";
import events from "./eventData.json"

function Events()
{
    let rows = events.map(function(i)
    {
        return <tr><td>{i.name}</td><td>{i.date}</td><td>{i.description}</td></tr>;
    });
      
    let eventTable =
    (
        <main>
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
            </table>
        </main>
    );

    return eventTable;
}

export default Events;