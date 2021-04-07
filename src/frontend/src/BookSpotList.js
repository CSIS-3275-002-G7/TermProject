import React, { Component } from 'react';
import BookSpot from './BookSpot';


class BookSpotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null
        }
    }

    selectedAppTimeGoGreen = (event) => {
        this.props.onSelect(event.target.id);
        this.setState( { selectedId: parseInt(event.target.id) });
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
    }




    render() {
        const BookSpotArray = this.props.appointments.map((app, i) => {
            return (<BookSpot
                key={this.props.appointments[i].appointmentId}
                id={this.props.appointments[i].appointmentId}
                time={this.props.appointments[i].time}
                date={this.props.appointments[i].date}
                available={this.props.appointments[i].available} />);
        });

        return (
            <div>
                <h3 id="h3-app" className="d-none">Available appointments: </h3>
                <div id="bookSpotList" value={this.id} className="d-none" onClick={(e) => this.selectedAppTimeGoGreen(e)}>{BookSpotArray}</div>
            </div>
        );
    }
}

export default BookSpotList;
