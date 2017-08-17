import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDirector } from './../../actions/attr';

import './Director.css';

class Director extends Component {

    constructor(props) {
        super(props);

        this.state = {
            director: '',
        };
    };

    changeDirector(director) {
        if (director !== null) {
            this.setState({director: director});
            this.props.requestDirector(director);    
        };
    };

    componentDidMount() {
        let director = localStorage.getItem("director");
        this.changeDirector(director);
    };

    handleInput = (event) => {
        let director = event.target.value;
        this.changeDirector(director);
        localStorage.setItem("director", director);
    };

    render() {
        return (
            <div className="director">
                <div className="Home-attr">
                    DIRECTOR
                </div>
                <input className="Home-input" type="text" value={this.state.director} onChange={this.handleInput}/>
            </div>
        );
    };
}

export default connect(
    (state, ownProps) => ({
        director: state.attr.director,
    }),
    dispatch => ({
        requestDirector: (params) => dispatch(requestDirector(params)),
    })
)(Director);
