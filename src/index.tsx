import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { MyNumbers } from "./components/MyNumbers";

let mainMenu: IMainMenu[] = [
    {
        "id": "accounts",
        "title": "Accounts",
        "position": 0,
        "backgroundColor": "blue",
    }, {
        "id": "groups",
        "title": "Groups",
        "position": 1,
        "backgroundColor": "red",
    }, {
        "id": "movements",
        "title": "Movements",
        "position": 2,
        "backgroundColor": "green",
    }, {
        "id": "stats",
        "title": "Stats",
        "position": 3,
        "backgroundColor": "yellow",
    }];
ReactDOM.render(
    <MyNumbers title="My Numbers" menus={mainMenu} />,
    document.getElementById("root")
);