import React from 'react';
import ReactDOM from 'react-dom';

class LoadingBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: 0, //frame could be 0-3
        };
        this.updateFrame = this.updateFrame.bind(this);
    }

    updateFrame() {
        let numframes = 4;
        let nextFrame = (this.state.frame + 1) % numframes;
        this.setState({
            frame: nextFrame,
        });
    }

    componentWillUnmount() {
        clearTimeout(this.to);
    }

    render() {
        this.to = setTimeout(this.updateFrame, 250);

        switch(this.state.frame) {
            case 0:
                return <p>-</p>;
                break;
            case 1:
                return <p>\</p>;
                break;
            case 2:
                return <p>|</p>;
                break;
            case 3:
                return <p>/</p>;
                break;
        }
    }
}

export default LoadingBar;
