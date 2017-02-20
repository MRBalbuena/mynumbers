import * as React from 'react';

export interface IMainMenuContainer {};

export class MainMenuContainer extends React.Component < IMainMenuContainer,never > {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="menuBlock">Accounts</div>
                    <div className="menuBlock">Groups</div>
                </div>
                <div className="container">
                    <div className="menuBlock">Movements</div>
                    < div className="menuBlock">Statistics</div>
                </div>
            </div>
        )
    }
}
