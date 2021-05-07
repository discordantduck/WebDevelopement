import React from "react";

function ActivityTable(props)
{
    let rows = props.events.map(function(event, i)
    {
        return (
        <tr key={"event" + i}>
            <td>{event.name}</td>
            <td>{event.date}</td>
            <td>{event.description}</td>
        </tr>
        );
    });

    return (
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
    );
}
    
class AdminActivities extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {eventName: "", eventDate: "", eventDescription: ""};
    }
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
}
                
export default AdminActivities;