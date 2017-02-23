import * as React from 'react';
import {AccountsComponent} from './AccountsComponent';

export class MenuContainer extends React.Component<IMenuContainer, IMainMenuContainerState> {
    public state: IMainMenuContainerState;
    constructor(){
        super();
        this.state = {currentModule: ''};
    }
    navigateTo = (selectedBlock: string) => {
        this.setState({ currentModule: selectedBlock });
    }
    render() {
        if (!this.state.currentModule)
        return <div>
            <div className="container">
                <div className="menuBlock" onClick={this.navigateTo.bind(this, 'accounts')}>Accounts</div>
                <div className="menuBlock" onClick={this.navigateTo.bind(this, 'groups')}>Groups</div>
            </div>
            <div className="container">
                <div className="menuBlock" onClick={this.navigateTo.bind(this, 'movements')}>Movements</div>
                < div className="menuBlock" onClick={this.navigateTo.bind(this, 'statistics')}>Statistics</div>
            </div>
        </div>
        if (this.state.currentModule == 'accounts')
            return <AccountsComponent />
    }
}