import React, { Component } from 'react';
import BookedSpot from './BookedSpot';


class BookedSpotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            bookedAppointments: []
        }
        this.componentDidMount();
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

        fetch("http://localhost:8080/bookings")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    bookedAppointments: data
                })
            })
            .catch(console.warn);
    }

    render() {
        // const bookedSpotArray =  this.state.joinedAppointments.map((app) => {
        //     return (<BookedSpot
        //         key={app.appointmentId}
        //         id={app.appointmentId}
        //         patientName={app.patientName}
        //         patientEmail={app.patientEmail}
        //         doctorName={app.name}
        //         time={app.time}
        //         date={app.date} />);
        // });
        const bookedSpotArray = this.state.bookedAppointments.map(
            x => Object.assign(x, this.state.appointments.find(
                y => y.appointmentId === x.appointmentId))).map((app) => {
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
