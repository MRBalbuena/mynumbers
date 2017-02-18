import * as React from 'react';

export interface IMenuContainer {};

export class MenuContainer extends React.Component < IMenuContainer,never > {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="menuBlock">Left top</div>
                    <div className="menuBlock">Right Top</div>
                </div>
                <div className="container">
                    <div className="menuBlock">Right Top</div>
                    < div className="menuBlock">
                        Right Top
                    </div>
                </div>
            </div>
        )
    }
}
