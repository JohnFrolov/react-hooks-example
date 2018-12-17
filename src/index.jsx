import * as React from "react";
import * as ReactDOM from "react-dom";
import {HookApp} from "./HookApp";

ReactDOM.render(
    <HookApp value="123"/>,
    document.getElementById("app")
);
module.hot.accept();
