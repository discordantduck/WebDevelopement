import React from "react";
import ReactDOM from "react-dom";

import events from "./eventData.json"

import Home from "./home";
import Menu from './menu';
import Events from "./events";
import Membership from "./membership";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { role: "user", show: "home" };
    }

    homeHandler(event)
    {
        this.setState({show: "home"});
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
            case "membership":
                content = <Membership />;
                break;
        }
        return (
        <>
            <Menu />
            {content}
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));