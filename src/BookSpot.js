import React, { Component } from 'react';
import 'tachyons';


const BookSpot = ({ time, id }) => {
    return (
        <div className="bg-blue dib ba br2 pv2 ph3 ma1 grow">{time}</div>
    )
}

export default BookSpot;