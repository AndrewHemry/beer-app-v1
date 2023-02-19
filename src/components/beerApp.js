import React, { Component} from 'react';
import axios from 'axios';
import BeerLike from './beerAppLike';

class BeerApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerResults: []
        }
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers')
        .then(res => {
            const beerResults = res.data
            this.setState({beerResults})
            console.log("The Beer Results:", beerResults)
        })
    }

    componentDidUpdate() {
        console.log("We've updated, Frank!")
    }

    render() {
        return (
            <div>
                <h2>Like a Beer!</h2>
                <ul>
                    {this.state.beerResults.map((beerResult, index) => {
                        const separtor = " | "
                        return(
                            <li key={index}>
                                <h4>{beerResult.name}</h4>
                                <p>
                                    <span>
                                        {beerResult.tagline}{separtor + " ABV: "}{beerResult.abv}
                                        <BeerLike />
                                    </span>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BeerApp;