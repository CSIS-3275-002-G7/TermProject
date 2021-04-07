import React, { Component } from 'react';
import 'tachyons';



class BookSpot extends Component {

    onClick = () => {
        this.props.setAppointmentId(this.props.id)
        // this.props.onClick()
    }

    getBackGroundColour = () => {
        if (this.props.id === this.props.selectedAppointment)
            return "bg-success"
        return "bg-blue"
    }

    render() {
        return (
            <React.Fragment>
                <div role="button" className={this.getBackGroundColour() +" dib ba br2 pv2 ph3 ma1 grow text-white appointmentTime"} onClick={this.onClick}>{this.props.time}</div>
            </React.Fragment>
        );


    }

}

export default BookSpot;
