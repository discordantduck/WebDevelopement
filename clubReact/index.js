import React from "react";
import ReactDOM from "react-dom";

import events from "./eventData.json"

import Menu from './menu';
import Home from "./home";
import Events from "./events";
import Membership from "./membership";
import AdminActivity from "./adminActivity";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {role: "admin", show: "adminActivity", events: events};

        this.homeHandler = this.homeHandler.bind(this);
        this.eventsHandler = this.eventsHandler.bind(this);
        this.membershipHandler = this.membershipHandler.bind(this);
        this.adminActivityHandler = this.adminActivityHandler.bind(this);
        this.addEventHandler = this.addEventHandler.bind(this);
    }
    homeHandler(event)
    {
        this.setState({show: "home"});
    }
    eventsHandler(event)
    {
        this.setState({show: "events"});
    }
    membershipHandler(event)
    {
        this.setState({show: "membership"});
    }
    adminActivityHandler(event)
    {
        this.setState({show: "adminActivity"});
    }
    addEventHandler(event)
    {
        this.setState({events: this.state.events.concat(event)});
    }
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
}

ReactDOM.render(<App />, document.getElementById("root"));