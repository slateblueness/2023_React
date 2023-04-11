import React, { Component } from 'react'

export class CountComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {count} = this.state;

        return (
        <div>
            <h4>{count}</h4>
            <button
                onClick={() => {this.setState({count: count+10})}}
            >
                +10
            </button>
        </div>
        )
    }
}

export default CountComp