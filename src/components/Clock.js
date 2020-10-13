import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

class Clock extends React.Component {
    static propTypes = {
        zone: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        removeClock: PropTypes.func.isRequired,
    }
        
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            time: 0,
            timerId: 0
        }
        this.removeClockHandler = this.removeClockHandler.bind(this);
    }

    componentDidMount() {
        let timerId = setInterval(() => {
            let testUTC = moment.utc().utcOffset(this.props.zone).format("HH:mm:ss");
            this.setState({
                time: testUTC
            });
        });
        this.setState({
            timerId: timerId,
            name: this.props.name
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    removeClockHandler = () => {
        this.props.removeClock(this.state.name);
    }

    render() {
        return(
            <div className="clockBlock">
                <div className="title">
                    {this.state.name}
                </div>
                <div className="inline">
                    <input className="time" type="text" value={this.state.time} readOnly />
                    <button className="removeBtn" onClick={this.removeClockHandler}>x</button>
                </div>
            </div>
        )
    }
}

export default Clock;