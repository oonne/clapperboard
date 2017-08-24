import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestScene, requestShot, requestTake } from './../../actions/cinematography';

import './Scene.css';

class Scene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scene: 1,
        };
    };

    static defaultProps = {
        scene: 1
    };

    changeScene(scene) {
        if (scene !== null) {
            this.setState({scene: scene});
            this.props.requestScene(scene);    
        };
    };

    componentDidMount() {
        let scene = localStorage.getItem("scene");
        this.changeScene(scene);
    };

    handleInput = (event) => {
        let scene = event.target.value;
        scene = scene ? scene : 0;
        scene = scene>0 ? scene : 0;
        
        this.changeScene(scene);
        localStorage.setItem("scene", scene);
        this.props.requestShot(1);
        localStorage.setItem("shot", 1);
        this.props.requestTake(1);
        localStorage.setItem("take", 1);
    };

    render() {
        return (
            <div className="scene">
                <div className="Home-attr">
                    SCENE
                </div>
                {
                    this.props.scene !== undefined && 
                    <input className="Home-input" type="number" value={this.props.scene} onChange={this.handleInput}/>   
                }   
            </div>
        );
    };
}

export default connect(
    (state, ownProps) => ({
        scene: state.cinematography.scene,
    }),
    dispatch => ({
        requestScene: (params) => dispatch(requestScene(params)),
        requestShot: (params) => dispatch(requestShot(params)),
        requestTake: (params) => dispatch(requestTake(params)),
    })
)(Scene);
