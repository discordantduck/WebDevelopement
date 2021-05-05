import React from "react";
import events from "./eventData.json"

function Events()
{
    let rows = events.map(function(i)
    {
        return (
        <tr key={i.name}>
            <td>{i.name}</td>
            <td>{i.date}</td>
            <td>{i.description}</td>
        </tr>
        );
    });

    return (
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
}

export default Events;