import React from 'react';
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
            <h3 id="h3-app" className="d-none">Available appointments: </h3>
            <div id="bookSpotList" className="d-none">{BookSpotArray}</div>
        </div>

    );

};

export default BookSpotList;
