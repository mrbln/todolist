import React, { Component } from 'react';
import './App.css';

export class List extends Component {

    render() {
        const { listItems } = this.props;

        return(
            <ul>
                { listItems.map((item, index) => <li key={index}> {item} </li>) }
            </ul>
        );
    }
}