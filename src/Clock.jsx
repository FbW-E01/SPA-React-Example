import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
        console.log("Clock is constructed");
    }

    // Special lifecycle method
    // Very often this is used to load data from an API!
    componentDidMount() {
        console.log("Clock was added to the DOM");

        this.timer = setInterval(() => {
            // console.log("Tick! Tock!");
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    // Special lifecycle method
    // Very often used for clearing resources
    componentWillUnmount() {
        console.log("Clock is being unmounted from DOM");
        clearInterval(this.timer);
    }

    render() {
        console.log("Clock is being rendered");
        return <p>The time is {this.state.date.toLocaleTimeString()}</p>;
    }
}

export default Clock;