import React from 'react';
import './App.css';


export default class Bomb extends React.Component{
    state = {
       count: 0
    };
    constructor() {
        super()
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({count: newCount});
            console.log(this.state.count);
            if(newCount >= 8) {
                clearInterval(this.interval);
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (<div>
            <p>{(this.state.count >= 8) ? 'BOOM!!!!' : (this.state.count % 2 === 0) ? 'tick' : 'tock'}</p>
        </div>)
    }

}