import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import {MyNumbers} from "./components/MyNumbers";

ReactDOM.render(
    <MyNumbers title="My Numbers" />,
    document.getElementById("root")
);