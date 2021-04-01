import React, { Component } from 'react';
import 'tachyons';



class BookSpot extends Component {
    state = {}


    render() {
        return (
            <React.Fragment>
                <div id="bookSpot" className="bg-blue dib ba br2 pv2 ph3 ma1 grow text-white">{this.props.time}</div>
            </React.Fragment>
        );
    }

}

export default BookSpot;
