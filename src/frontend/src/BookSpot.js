import React, { Component } from 'react';
import 'tachyons';



class BookSpot extends Component {

    render() {
        return (
            <React.Fragment>
                <div role="button" className="bg-blue dib ba br2 pv2 ph3 ma1 grow text-white appointmentTime" onClick={this.props.onClick}>{this.props.time}</div>
            </React.Fragment>
        );


    }

}

export default BookSpot;
