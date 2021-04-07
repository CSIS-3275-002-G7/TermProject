import React, { Component } from 'react';
import BookSpotList from './BookSpotList';
import DocSelect from './DocSelect'


class App extends Component {
    state = {
        appointments: [],
        docSelect: '',
        date: ''
    }
    
    componentDidMount() {
        fetch("http://localhost:8080/appointments")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    appointments: data
                })
            })
            .catch(console.warn);
    }

    docEnableAndTime = (event) => {
        document.getElementById("docSelect").disabled = false;
        this.setState( {date: event.target.value});
        if (this.state.docSelect) {
            document.getElementById("h3-app").className = "d-block";
            document.getElementById("bookSpotList").className = "d-block";
        }
    };

    onDocSelect = (event) => {
        //console.log(event.target.value);
        this.setState({ docSelect: event.target.value });
        document.getElementById("h3-app").className = "d-block";
        document.getElementById("bookSpotList").className = "d-block";
    };

    render() {
        const filteredAppointments = this.state.appointments.filter(app => {
            return app.name.includes(this.state.docSelect) & app.date.includes(this.state.date);
        });
        return (
            <div>
                <div className="mb-3">
                        <label htmlFor="date" className="form-label">Appointment date</label>
                        <input type="date" id="appDate" max="2021-04-30" name="date" className="form-control"
                            aria-describedby="dateHelp" onChange={this.docEnableAndTime} required/>
                        <div id="dateHelp" className="form-text">Please select preferrable appointment date to see available
                            spots</div>
                    </div>
                <DocSelect onSelect={this.onDocSelect} />
                <BookSpotList appointments={filteredAppointments} />
            </div>);
    }
}

export default App;