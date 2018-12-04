import * as React from "react";
import * as ReactDOM from "react-dom";
import {ClassApp} from "./ClassApp";

ReactDOM.render(
    <ClassApp value="123"/>,
    document.getElementById("app")
);
module.hot.accept();
