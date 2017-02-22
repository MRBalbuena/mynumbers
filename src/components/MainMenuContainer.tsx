import * as React from 'react';
import { MenuContainer } from './MenuContainer';
import {AccountsComponent} from './AccountsComponent';

export class MainMenuContainer extends React.Component<IMainMenuContainer, IMainMenuContainerState> {
    public state: IMainMenuContainerState;
    constructor() {
        super();
        this.state = { currentModule: '' };
    }
    render() {
        if (this.state.currentModule == '')
            return <div><MenuContainer /></div>
        if (this.state.currentModule == 'accounts')
            return (
                <div>
                    <AccountsComponent />
                </div>
            )
    }
}
