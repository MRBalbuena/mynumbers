import * as React from 'react';

interface IMenuBlockProps {
    menu: IMainMenu;
}

export class MenuBlock extends React.Component<IMenuBlockProps, {}>{
    navigateTo = (selectedBlock: string) => {
        console.log(selectedBlock);
        this.setState({ currentModule: selectedBlock });
    }
    render() {
        let backgroundColor = {backgroundColor: this.props.menu.backgroundColor};
        return <div className="menuBlock" style={backgroundColor} onClick={this.navigateTo.bind(this, this.props.menu.id)}>{this.props.menu.title}</div>
    }
}