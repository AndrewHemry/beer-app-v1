import React, { Component} from 'react';
import axios from 'axios';

class BeerApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerResults: []
        }
    }

    render() {
        return (
            <div>
                <h2>Like a Beer!</h2>
            </div>
        )
    }
}

export default BeerApp;