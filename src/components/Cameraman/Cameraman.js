import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCameraman } from './../../actions/attr';

import './Cameraman.css';

class Cameraman extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cameraman: '',
        };
    };

    changeCameraman(cameraman) {
        if (cameraman !== null) {
            this.setState({cameraman: cameraman});
            this.props.requestCameraman(cameraman);    
        };
    };

    componentDidMount() {
        let cameraman = localStorage.getItem("cameraman");
        this.changeCameraman(cameraman);
    };

    handleInput = (event) => {
        let cameraman = event.target.value;
        this.changeCameraman(cameraman);
        localStorage.setItem("cameraman", cameraman);
    };

    render() {
        return (
            <div className="cameraman">
                <div className="Home-attr">
                    CAMERAMAN
                </div>
                <input className="Home-input" type="text" value={this.state.cameraman} onChange={this.handleInput}/>
            </div>
        );
    };
}

export default connect(
    (state, ownProps) => ({
        cameraman: state.attr.cameraman,
    }),
    dispatch => ({
        requestCameraman: (params) => dispatch(requestCameraman(params)),
    })
)(Cameraman);
