import React, { Component } from 'react';
import crack from "./../../assets/crack.mp3";
import './Clapper.css';

const g = 2;
let t = 0;
let startPosition = 0;

class Clapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            distacne: 0,
        };
    };

    clapperDrop = () => {
        if (this.state.distacne>0) {
            t++;
            let distance = this.state.distacne-(g*t);
            distance = distance>=0 ? distance : 0;
            this.setState({distacne: distance});
            setTimeout(this.clapperDrop, 17);
        } else {
            this.play();
        }
    };

    play = () => {
        let audio = this.refs.audio;
        audio.play();
    };

    touchStart = (e) => {
        startPosition = e.changedTouches[0].clientY-this.state.distacne;
        t = 0;
    };
    touchEnd = () => {
        this.clapperDrop();
    };
    touchMoveUpper = (e) => {
        let y = e.changedTouches[0].clientY;
        if ( y<startPosition ) {
            this.setState({distacne: startPosition-y});
        }
    };
    touchMoveLower = (e) => {
        let y = e.changedTouches[0].clientY;
        if ( y>startPosition ) {
            this.setState({distacne: y-startPosition});
        }
    };

    render() {
        return (
            <div className="clapper">
                <audio ref="audio" src={crack} preload="auto" />
                <div className="clapper-upper">
                    <div className="clapper-upper-content" 
                        style={{bottom: this.state.distacne}}
                        onTouchStart={this.touchStart} 
                        onTouchMove={this.touchMoveUpper} 
                        onTouchEnd={this.touchEnd}>
                    </div>
                </div>
                <div className="clapper-lower">
                    <div className="clapper-lower-content" 
                        style={{top: this.state.distacne}}
                        onTouchStart={this.touchStart} 
                        onTouchMove={this.touchMoveLower} 
                        onTouchEnd={this.touchEnd}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clapper;
