import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date()
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: new Date()
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <p>Hello, World! {this.state.currentTime.toLocaleString()}</p>
            </div>
        );
    }
}

export default HelloWorld;
