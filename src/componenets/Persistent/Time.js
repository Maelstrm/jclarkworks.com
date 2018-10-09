import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { time: '' };
    }

    tick() {

        var Digital = new Date()
        var day = Digital.getDay();
        var hours = Digital.getHours()
        var minutes = Digital.getMinutes()
        var seconds = Digital.getSeconds()
        var dn = "AM"
        if (hours > 12) {
            dn = "PM"
            hours = hours - 12
        }
        if (hours === 0)
            hours = 12;
        if (minutes <= 9)
            minutes = "0" + minutes;
        if (seconds <= 9)
            seconds = "0" + seconds;
        if (day === 1)
            day = 'Mon'
        if (day === 2)
            day = 'Tue'
        if (day === 3)
            day = 'Wed'
        if (day === 4)
            day = 'Thu'
        if (day === 5)
            day = 'Fri'
        if (day === 6)
            day = 'Sat'
        if (day === 0)
            day = 'Sun'
        let timeDisplay = day + " " + hours + ":" + minutes + " " + dn;
        
        this.setState({
            time: timeDisplay
        })


    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        );
    }
}

export default Time;