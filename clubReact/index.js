import React from "react";
import ReactDOM from "react-dom";

import Menu from './menu';
import Home from "./home";
import Events from "./events";
//import AddEvent from "./addEvent";
//import Login from "./login";
//import Logout from "./logout";
import Membership from "./membership";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {role: "user", show: "home"};

        this.homeHandler = this.homeHandler.bind(this);
        this.eventsHandler = this.eventsHandler.bind(this);
        this.membershipHandler = this.membershipHandler.bind(this);
    }
    homeHandler(event)
    {
        this.setState({show: "home"});
    }
    eventsHandler(event)
    {
        this.setState({show: "events"});
    }
    addEventHandler(event)
    {
        this.setState({show: "addEvent"});
    }
    loginHandler(event)
    {
        this.setState({show: "login"})
    }
    logoutHandler(event)
    {
        this.setState({show: "logout"})
    }
    membershipHandler(event)
    {
        this.setState({show: "membership"});
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
                content = <Events />;
                break;
            case "addEvent":
                content = <AddEvent />;
                break;
            case "login":
                content = <Login />;
                break;
            case "logout":
                content = <Logout />;
                break;
            case "membership":
                content = <Membership />;
                break;
            default:
                content = (<h1>Something went wrong</h1>);
        }
        return (
        <>
            <Menu state={this.state} method={this}/>
            {content}
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));