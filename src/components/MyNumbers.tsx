import * as React from "react";

export interface IMyNumbers {
    title: string;
}

export class MyNumbers extends React.Component<IMyNumbers, never>{
    render() {
        return (
            <div className="jumbotron">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}