import * as React from "react";

export interface IGroceryList { };

export class GroceryList extends React.Component<IGroceryList, undefined> {
    render() {
        return (
            <ul>
                <ListItem quantity="1" name="Bread" />
                <ListItem quantity="6" name="Eggs" />
                <ListItem quantity="8" name="Milk" />
            </ul>
        );
    }
}

export interface IListItem {
    quantity: string,
    name: string
}

export class ListItem extends React.Component<IListItem, undefined>{
    render() {
        return (

            <li>
                {this.props.quantity} x {this.props.name}
            </li>
        );
    }
}