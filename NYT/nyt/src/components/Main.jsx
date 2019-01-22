import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import Results from './Results';

class Main extends Component {
    render() {
        return (
            <div>
                <SearchPanel />
                <Results />
            </div>
        );
    }
}

export default Main;