import React, { Component } from 'react'

export class PropsComp extends Component {
    render() {
        const {color, children} = this.props;

        return (
        <div style={{color: color}}>
            {children}
        </div>
        )
    }
}

export default PropsComp