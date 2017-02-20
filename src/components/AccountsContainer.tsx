import * as React from 'react';

export interface IAccountsContainer {};

export interface IAccountContainerState{
    visible: boolean;
}

export class AccountsContainer extends React.Component < IAccountsContainer,IAccountContainerState > {
    public state: IAccountContainerState;
    constructor(){
        super();
        this.state = {visible: false};
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="menuBlock">Create</div>
                    <div className="menuBlock">Filter</div>
                </div>
            </div>
        )
    }
}
