import React, { Component } from 'react';
import 'tachyons';


const BookSpot = ({ time, id }) => {
    return (
        <React.Fragment>
            <div id="appList" className="bg-blue dib ba br2 pv2 ph3 ma1 grow text-white d-none">{time}</div>
        </React.Fragment>
        )
}

export default BookSpot;