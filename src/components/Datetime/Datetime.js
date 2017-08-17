import React, { Component } from 'react';

import './Datetime.css';

class Datetime extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datetime: this.getNowDate,
        };
    };

    getNowDate() {
        let date = new Date();
        let fotmatDate = '';
        let y = date.getFullYear();
        let m = date.getMonth()+1;
        let d = date.getDate();
        if (m >= 1 && m <= 9) {
            m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
            d = "0" + d;
        }
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        fotmatDate = y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
        return fotmatDate;
    }

    updateTime() {
        let vm = this;
        setInterval(function () {
            vm.setState({datetime: vm.getNowDate()});
        }, 1000);
    }

    componentDidMount() {
        this.updateTime();
    };

    render() {
        return (
            <div className="datetime">
                <div className="Home-attr">
                    DATETIME
                </div>
                <div className="Home-datetime">
                    {this.state.datetime}
                </div>
            </div>
        );
    };
}

export default Datetime;
