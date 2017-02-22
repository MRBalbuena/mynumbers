import * as React from 'react';
import {AccountsComponent} from './AccountsComponent';

export class MenuContainer extends React.Component<IMenuContainer, IMainMenuContainerState> {
    public state: IMainMenuContainerState;
    constructor(){
        super();
        this.state = {currentModule: ''};
    }
    navigateTo = () => {
        this.setState({ currentModule: 'accounts' });
    }
    render() {
        if (!this.state.currentModule)
        return <div>
            <div className="container">
                <div className="menuBlock" onClick={this.navigateTo.bind(this)}>Accounts</div>
                <div className="menuBlock">Groups</div>
            </div>
            <div className="container">
                <div className="menuBlock">Movements</div>
                < div className="menuBlock">Statistics</div>
            </div>
        </div>
        if (this.state.currentModule == 'accounts')
            return <AccountsComponent />
    }
}