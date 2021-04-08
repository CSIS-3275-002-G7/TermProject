import React, { Component } from 'react';
import BookSpot from './BookSpot';


class BookSpotList extends Component {
    state = {
        appointmentId: ''
    }





    render() {

        const BookSpotArray = this.props.appointments.map((app, i) => {
            return (<BookSpot
                key={this.props.appointments[i].appointmentId}
                id={this.props.appointments[i].appointmentId}
                time={this.props.appointments[i].time}
                date={this.props.appointments[i].date}
                // onClick={this.props.onClick.bind(this)}
                selectedAppointment={this.props.selectedAppointment}
                setAppointmentId={this.props.setAppointmentId}
                setTime={this.props.setTime}

            />);
        });




        return (
            <div>
                <h3 id="h3-app" className="d-none">Available appointments: </h3>
                <div id="bookSpotList" className="d-none" >{BookSpotArray}</div>
            </div>
        );
    }
}

export default BookSpotList;
