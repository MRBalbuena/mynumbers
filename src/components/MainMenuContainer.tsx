import * as React from 'react';
import { MenuContainer } from './MenuContainer';
import {AccountsComponent} from './AccountsComponent';

export class MainMenuContainer extends React.Component<IMainMenuContainerProps, IMainMenuContainerState> {
    public state: IMainMenuContainerState;
    constructor(props: any) {
        super(props);
        this.state = {currentModule: ''};
    }
    render() {
        if (this.state.currentModule == '')
            return <div><MenuContainer menus={this.props.menus}/></div>
        if (this.state.currentModule == 'accounts')
            return (
                <div>
                    <AccountsComponent />
                </div>
            )
    }
}
