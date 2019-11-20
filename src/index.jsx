import * as React from "react";
import * as ReactDOM from "react-dom";
import reactime from 'reactime';
import {HookApp} from "./HookApp";

const App = <HookApp value="123"/>;

const root = document.getElementById("app")

ReactDOM.render(
    App,
    root
);
reactime(root);
module.hot.accept();
