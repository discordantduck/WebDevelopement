import React from "react";

function AdminActivity(props)
{
    let rows = props.events.map(function(i)
    {
        return (
        <tr key={i.name}>
            <td><button>Delete</button></td>
            <td>{i.name}</td>
            <td>{i.date}</td>
            <td>{i.description}</td>
        </tr>
        );
    });

    return (
    <main>
        <form>
            <h1>Activity Management</h1>

            <label>Name</label>
            <input type="text" name={props.state.eventName}></input>

            <label>Date</label>
            <input type="text" date={props.state.eventDate}></input>

            <button onClick={props.method.addEventHandler}>Add</button>
        </form>

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

export default AdminActivity;