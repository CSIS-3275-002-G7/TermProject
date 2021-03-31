import React, { Component } from 'react';
import BookSpot from './BookSpot';

const BookSpotList = ({ appointments }) => {
    const BookSpotArray = appointments.map((app, i) => {
        return (<BookSpot
            key={appointments[i].id}
            id={appointments[i].id}
            time={appointments[i].time} />);
    });
    return (
        <div>
            {BookSpotArray}
        </div>

    );

};

export default BookSpotList;
