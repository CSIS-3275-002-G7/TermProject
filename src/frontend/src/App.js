import React, { Component } from 'react';
import BookSpotList from './BookSpotList';
import DocSelect from './DocSelect';


class App extends Component {
    state = {
        appointments: [],
        docSelect: '',
        date: '',
        appointmentId: -1,
        time: ''
    }

    componentDidMount() {
        fetch("http://localhost:8080/appointments")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    appointments: data
                })
            })
            .catch(console.warn);
    }

    docEnableAndTime = (event) => {
        console.log("jappen")
        document.getElementById("docSelect").disabled = false;
        this.setState({ date: event.target.value, appointmentId: -1 });
        if (this.state.docSelect) {
            document.getElementById("h3-app").className = "d-block";
            document.getElementById("bookSpotList").className = "d-block";
        }
    };

    onDocSelect = (event) => {
        this.setState({ docSelect: event.target.value, appointmentId: -1 });
        document.getElementById("h3-app").className = "d-block";
        document.getElementById("bookSpotList").className = "d-block";
    };

    setAppointmentId = (appointmentId) => {
        this.setState({ appointmentId: appointmentId });
    }

    setTime = (time) => {
        this.setState({ time: time });
    }



    addAppointment = (form) => {
        form.preventDefault();


        const formElem = document.getElementById("book-form").elements;
        const formComponent = document.getElementById("form-component");
        const showBookingDetails = document.getElementById("booking-details")
        const email = formElem["inputEmail"].value;
        const name = formElem["inputName"].value;
        const date = formElem["appDate"].value;
        const time = this.state.time;
        const appId = this.state.appointmentId;
        const doctor = this.state.docSelect;


        formComponent.className = "d-none";
        showBookingDetails.className = "d-block";



        // form data to booking table 
        var docName;
        switch (doctor) {
            case 'Frank':
                docName = 'Frank Kinney';
                break;
            case 'Elmer':
                docName = 'Elmer Briggs'
                break;
            case 'Polly':
                docName = 'Polly Walter'
                break;
            case 'Jennie':
                docName = 'Jennie Clark'
                break;
        }

        document.getElementById("patient-name").innerText = name;
        document.getElementById("patient-email").innerText = email;
        document.getElementById("appointment-date").innerText = date;
        document.getElementById("appointment-time").innerText = time;
        document.getElementById("doctor-selected").innerText = docName;



        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'

                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return response.json();
        }
        postData('http://localhost:8080/bookings', { patientName: name, patientEmail: email, appointmentId: appId })
            .then(data => {
                console.log(data);
            });
    }


    cancelAppointment = () => {
        fetch('http://localhost:8080/bookings/' + this.state.appointmentId, { method: 'DELETE' })
            .then(() => console.log("delete successfull"));

        document.getElementById("booking-details").innerHTML = "<h2>Your appointment is cancelled</h2>";
    }

    render() {
        const filteredAppointments = this.state.appointments.filter(app => {
            return app.name.includes(this.state.docSelect) & app.date.includes(this.state.date);
        })

        const sortedFilteredAppointments = filteredAppointments.slice().sort((a, b) => {
            const timeA = parseInt(a.time);
            const timeB = parseInt(b.time);

            const formattedA = timeA < 6 ? timeA + 12 : timeA;
            const formattedB = timeB < 6 ? timeB + 12 : timeB;

            return formattedA - formattedB;
        })

        return (
            <React.Fragment>
                <div id="form-component" className="d-block">
                    <h2>Book an appointment with one of our doctors</h2>
                    <form action="" method="" id="book-form">
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="inputEmail"
                                aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Patient Name</label>
                            <input type="text" name="name" className="form-control" id="inputName" aria-describedby="nameHelp"
                                required />
                            <div id="nameHelp" className="form-text">Please enter your legal First and Last name</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Appointment date</label>
                            <input type="date" id="appDate" min="2021-04-08" max="2021-04-23" name="date" className="form-control"
                                aria-describedby="dateHelp" onChange={this.docEnableAndTime} required />
                            <div id="dateHelp" className="form-text">Please select preferrable appointment date to see available
                                    spots</div>
                        </div>

                        <DocSelect onSelect={this.onDocSelect} />
                        <BookSpotList
                            appointments={sortedFilteredAppointments}
                            selectedAppointment={this.state.appointmentId}
                            setAppointmentId={this.setAppointmentId}
                            setTime={this.setTime}
                        />


                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                            <label className="form-check-label" htmlFor="exampleCheck1">I consent to processing of
                                    the personal data </label>
                        </div>

                        <button className="btn btn-primary" onClick={this.addAppointment}>Submit</button>
                    </form>
                </div>

                <div id="booking-details" className="d-none">
                    <h2>Your appointments is booked!</h2>
                    <br />
                    <h3>Thank you for booking your visit with us</h3>
                    <h3>Below is your booking confirmation</h3>
                    <table className="table m-5 p-5">
                        <tbody>
                            <tr className="py-5">
                                <th scope="row">Patient Name</th>
                                <td id="patient-name"></td>
                            </tr>
                            <tr className="py-5">
                                <th scope="row">Patient Email</th>
                                <td id="patient-email"></td>
                            </tr>
                            <tr className="py-5">
                                <th scope="row">Appointment Date</th>
                                <td id="appointment-date"></td>
                            </tr>
                            <tr className="py-5">
                                <th scope="row">Appointment Time</th>
                                <td id="appointment-time"></td>
                            </tr>
                            <tr className="py-5">
                                <th scope="row">Doctor</th>
                                <td id="doctor-selected"></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h4 className="tc">If you wanted to cancel your appointment please press the button below</h4>
                    <br />
                    <button className="btn btn-warning mx-auto" onClick={this.cancelAppointment}>Cancel appointment</button>

                </div>
            </React.Fragment>

        );
    }
}

export default App;