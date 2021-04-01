import React, { Component } from 'react';
import BookSpotList from './BookSpotList';
import DocSelect from './DocSelect'
import { appointments } from './Appointments';


class App extends Component {
    state = {
        appointments: appointments,
        docSelect: ''
    }

    onDocSelect = (event) => {
        //console.log(event.target.value);
        this.setState({ docSelect: event.target.value });
        document.getElementById("h3-app").className = "d-block";
        document.getElementById("bookSpotList").className = "d-block";


    };

    render() {
        const filteredAppointments = this.state.appointments.filter(app => {
            return app.name.includes(this.state.docSelect);
        });
        return (
            <div>
                <DocSelect onSelect={this.onDocSelect} />
                <BookSpotList appointments={filteredAppointments} />
            </div>);
    }
}

export default App;