import React, { Component } from 'react';
import BookedSpot from './BookedSpot';


class BookedSpotList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const bookedSpotArray =  this.props.bookedAppointments.map((app) => {
            return (<BookedSpot
                key={app.appointmentId}
                id={app.appointmentId}
                patientName={app.patientName}
                patientEmail={app.patientEmail}
                doctorName={app.name}
                time={app.time}
                date={app.date} />);
        });

        return (
            <div>
                <h3 id="h3-app">Booked Appointments: </h3>
                <div id="bookedSpotList">{bookedSpotArray}</div>
            </div>
        );
    }
}

export default BookedSpotList;
