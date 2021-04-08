import React, { Component } from 'react';
import 'tachyons';



class BookedSpot extends Component {
    state = {}

    render() {


        return (
            <React.Fragment>
                <div role="button" className="bg-blue dib ba br2 pv2 ph3 ma1 grow text-white appointmentTime">Date: {this.props.date}
                Time: {this.props.time} Patient Name: {this.props.patientName} Patient Email{this.props.patientEmail}
                Doctor Name: {this.props.doctorName} </div>
            </React.Fragment>
        );
    }

}

export default BookedSpot;
