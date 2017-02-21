import * as React from 'react';

export class MainMenuContainer extends React.Component < IMainMenuContainer,IMainMenuContainerState > {
    public state: IMainMenuContainerState;
    constructor(){
        super();
        this.state = {visible: true};
    }
    navigateTo = () => {
        console.log(this.state.visible);
        this.setState({visible: !this.state.visible});
    }

    render() {        
        return (
            <div>
                <div className="container">
                    <div className="menuBlock" onClick={this.navigateTo.bind(this)}>Accounts</div>
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
