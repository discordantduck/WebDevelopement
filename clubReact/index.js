/*import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"
import Menu from './menu';
import Home from "./home";
import Events from "./events";
import Membership from "./membership";

let contents = <Menu />; 

ReactDOM.render(contents, document.getElementById("root"));*/

import React from "react";
import ReactDOM from "react-dom";

let myName = "Leo"; // Use your name not mine!!!
let contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
  </section>;

ReactDOM.render(contents, document.getElementById("root"));