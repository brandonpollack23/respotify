import React from 'react';

class FirstComponent extends React.Component {
    render() {
        return (
            <div className="greeting">
                Hello, {this.props.name}!
            </div>
        );
    }
}

export default FirstComponent
