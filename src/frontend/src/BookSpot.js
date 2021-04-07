import React, { Component } from 'react';
import 'tachyons';



class BookSpot extends Component {
    state = {}

    selectedAppTime = (event) => {
        this.setState({ time: event.target.innerText })
    }


    render() {


        return (
            <React.Fragment>
                <div role="button" className="bg-blue dib ba br2 pv2 ph3 ma1 grow text-white appointmentTime" onClick={this.selectedAppTime}>{this.props.time}</div>
            </React.Fragment>
        );
    }

}

export default BookSpot;
