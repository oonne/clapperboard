import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import config from './../../config';

class App extends Component {

    disableScroll(event) {
        event.preventDefault();
    };
    
    render() {
        return (
            <div onTouchMove={this.disableScroll}>
                <Helmet>
                    <title>{config.name}</title>
                </Helmet>
                {this.props.children}
            </div>
        );
    }
}

export default App;
