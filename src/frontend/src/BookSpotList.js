import React, { Component } from 'react';
import BookSpot from './BookSpot';


class BookSpotList extends Component {
    state = {}




    render() {
        console.log(this.props.appointments);
        const BookSpotArray = this.props.appointments.map((app, i) => {
            return (<BookSpot
                key={this.props.appointments[i].appointmentId}
                id={this.props.appointments[i].appointmentId}
                time={this.props.appointments[i].time}
                date={this.props.appointments[i].date}
                available={this.props.appointments[i].available} />);
        });


        function selectedAppTimeGoGreen() {
            //    if (event.target.innerText == BookSpotArray[0].props.time)
            var divs = document.querySelectorAll('.appointmentTime');
            for (var i = 0; i < divs.length; i++) {
                divs[i].addEventListener('click', function () {
                    for (var j = 0; j < divs.length; j++) {
                        divs[j].classList.remove('bg-success');
                    }
                    this.classList.add('bg-success');
                 
                    return false;
                });
            }

            //event.target.classList.toggle("bg-success");

        }

        //console.log(BookSpotArray);


        return (
            <div>
                <h3 id="h3-app" className="d-none">Available appointments: </h3>
                <div id="bookSpotList" className="d-none" onClick={selectedAppTimeGoGreen()}>{BookSpotArray}</div>
            </div>
        );
    }
}

export default BookSpotList;
