import * as React from 'react';

interface IAccountsComponent { }

export class AccountsComponent extends React.Component<IAccountsComponent, null>{
    render() {
        return (
            <div className="container">
                <div className="menuBlock">Accounts</div>
                <div className="menuBlock">Search</div>
            </div>)
    }
}