import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestShot, requestTake } from './../../actions/cinematography';

import './Shot.css';

class Shot extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shot: 1,
        };
    };

    static defaultProps = {
        shot: 1
    };

    changeShot(shot) {
        if (shot !== null) {
            this.setState({shot: shot});
            this.props.requestShot(shot);    
        };
    };

    componentDidMount() {
        let shot = localStorage.getItem("shot");
        this.changeShot(shot);
    };

    handleInput = (event) => {
        let shot = event.target.value;
        shot = shot ? shot : 0;
        shot = shot>0 ? shot : 0;

        this.changeShot(shot);
        localStorage.setItem("shot", shot);
        this.props.requestTake(1);
        localStorage.setItem("take", 1);
    };

    render() {
        return (
            <div className="shot">
                <div className="Home-attr">
                    SHOT
                </div>
                {
                    this.props.shot !== undefined && 
                    <input className="Home-input" type="number" value={this.props.shot} onChange={this.handleInput}/>   
                }                
            </div>
        );
    };
}

export default connect(
    (state, ownProps) => ({
        shot: state.cinematography.shot,
    }),
    dispatch => ({
        requestShot: (params) => dispatch(requestShot(params)),
        requestTake: (params) => dispatch(requestTake(params)),
    })
)(Shot);
