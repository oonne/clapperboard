import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestTake } from './../../actions/cinematography';

import './Take.css';

class Take extends Component {

    constructor(props) {
        super(props);

        this.state = {
            take: 1,
        };
    };

    static defaultProps = {
        take: 1
    };

    changeTake(take) {
        if (take !== null) {
            this.setState({take: take});
            this.props.requestTake(take);    
        };
    };

    componentDidMount() {
        let take = localStorage.getItem("take");
        this.changeTake(take);
    };

    handleInput = (event) => {
        let take = event.target.value;
        take = take ? take : 0;
        take = take>0 ? take : 0;
        
        this.changeTake(take);
        localStorage.setItem("take", take);
    };

    render() {
        return (
            <div className="take">
                <div className="Home-attr">
                    TAKE
                </div>
                {
                    this.props.take !== undefined && 
                    <input className="Home-input" type="number" value={this.props.take} onChange={this.handleInput}/>   
                }   
            </div>
        );
    };
}

export default connect(
    (state, ownProps) => ({
        take: state.cinematography.take,
    }),
    dispatch => ({
        requestTake: (params) => dispatch(requestTake(params)),
    })
)(Take);
