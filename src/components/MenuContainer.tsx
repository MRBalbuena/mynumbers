import * as React from 'react';
import {AccountsComponent} from './AccountsComponent';
import {MenuBlock} from './MenuBlock';

export class MenuContainer extends React.Component<IMenuContainer, IMainMenuContainerState> {
    public state: IMainMenuContainerState;
    constructor(props: any){
        super(props);    
        console.log(props);
        this.state = {currentModule: ''}
    }

    render() {
        if (!this.state.currentModule)
        return <div>
            <div className="container">
                <MenuBlock menu={this.props.menus[0]} />
                <MenuBlock menu={this.props.menus[1]} />
            </div>
            <div className="container">
                <MenuBlock menu={this.props.menus[2]} />
                <MenuBlock menu={this.props.menus[3]} />
            </div>
        </div>
        if (this.state.currentModule == 'accounts')
            return <AccountsComponent />
    }
}