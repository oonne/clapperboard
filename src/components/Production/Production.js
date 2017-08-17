import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestProduction } from './../../actions/attr';

import './Production.css';

class Production extends Component {

    constructor(props) {
        super(props);

        this.state = {
            production: '',
        };
    };

    changeProduction(production) {
        if (production !== null) {
            this.setState({production: production});
            this.props.requestProduction(production);    
        };
    };

    componentDidMount() {
        let production = localStorage.getItem("production");
        this.changeProduction(production);
    };

    handleInput = (event) => {
        let production = event.target.value;
        this.changeProduction(production);
        localStorage.setItem("production", production);
    };

    render() {
        return (
            <div className="production">
                <div className="Home-attr">
                    PRODUCTION
                </div>
                <input className="Home-input" type="text" value={this.state.production} onChange={this.handleInput}/>
            </div>
        );
    };
}

export default connect(
    (state, ownProps) => ({
        production: state.attr.production,
    }),
    dispatch => ({
        requestProduction: (params) => dispatch(requestProduction(params)),
    })
)(Production);
