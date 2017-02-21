import * as React from "react";
import {MainMenuContainer} from "./MainMenuContainer";

export class MyNumbers extends React.Component<IMyNumbers, never>{
    render() {
        return (
            <div className="mainContainer">
                <div className="titleBlock">
                    <h1>{this.props.title}</h1>
                </div>
                <MainMenuContainer />
            </div>
        );
    }
}