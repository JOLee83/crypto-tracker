import React, { Component } from 'react';
class Data extends Component {
    state = {}
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td className="number">{this.props.id}</td>
                <td className="label">{this.props.symbol}</td>
                <td className="number">{this.props.rank}</td>
                <td className="numbers">${Math.floor(this.props.price * 100)/100}</td>
            </tr>
        );
    }
}

export default Data;