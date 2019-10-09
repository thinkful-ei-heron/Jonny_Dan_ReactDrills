import React from 'react';
import './App.css';


export default class RouletteGun extends React.Component{

    state = {
        chamber: null,
        spinningTheChamber: false
    };
    constructor(props) {
        super(props)
    }


    handlePulledTrigger = () => {
    this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(()=> {
        this.setState({chamber:Math.ceil(Math.random() * 8), spinningTheChamber: false});
    }, 2000)
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        return (<div>
            <p>{(this.state.spinningTheChamber) ? 'spinning the chamber and pulling the trigger!' : (this.state.chamber === this.props.bulletInChamber) ? 'BANG!!!' : `You're Safe!`}</p>
            <button onClick={this.handlePulledTrigger}>Pull the Trigger!</button>
        </div>)
    }

}