import React, { Component } from 'react';
import Clapper from '../../components/Clapper/Clapper';
import Production from '../../components/Production/Production';
import Director from '../../components/Director/Director';
import Cameraman from '../../components/Cameraman/Cameraman';
import Datetime from '../../components/Datetime/Datetime';
import Scene from '../../components/Scene/Scene';
import Shot from '../../components/Shot/Shot';
import Take from '../../components/Take/Take';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="Home-clapper">
                    <Clapper/>
                </div>
                <div className="Home-production">
                    <Production/>
                </div>
                <div className="Home-cinematography">
                    <Scene/>
                    <Shot/>
                    <Take/>
                </div>
                <div className="Home-infos">
                    <Director/>
                    <Cameraman/>
                    <Datetime/>
                </div>
            </div>
        );
    }
}

export default Home;