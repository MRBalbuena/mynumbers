import * as React from "react";
import {GroceryList} from "./GroceryList";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>        
            <GroceryList />
            </div>
        )
    }
}

/* This results in the same that code above.
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
*/