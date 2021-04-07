import React, { Component } from 'react';
import BookSpotList from './BookSpotList';
import DocSelect from './DocSelect';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            docSelect: '',
            date: '',
            patientEmail: '',
            patientName: '',
            selectedAppId: null
        }
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
        document.getElementById("docSelect").disabled = false;
        this.setState({ date: event.target.value });
        if (this.state.docSelect) {
            document.getElementById("h3-app").className = "d-block";
            document.getElementById("bookSpotList").className = "d-block";
        }
    };

    onDocSelect = (event) => {
        //console.log(event.target.value);
        this.setState({ docSelect: event.target.value });
        document.getElementById("h3-app").className = "d-block";
        document.getElementById("bookSpotList").className = "d-block";
    };

    addAppointment = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/bookings', {
            appointmentId: this.state.selectedAppId,
            patientEmail: this.state.patientEmail,
            patientName: this.state.patientName
        })
        const changeAppointment = this.state.appointments.filter(
            ({ appointmentId }) => this.state.selectedAppId.includes(appointmentId))[0];
        axios.put('http://localhost:8080/appointments/' + this.state.selectedAppId, {
            appointmentId: this.state.selectedAppId,
            name: changeAppointment.name,
            date: changeAppointment.date,
            time: changeAppointment.time,
            available: false
        })
    };


//    addAppointment = (form) => {
//        form.preventDefault();
        // const email = form.elements["email"];
        // const name = form.elements["name"];
        // const appId = 123;
        // const obj = {
        //     patientName: name,
        //     patientEmail: email,
        //     appointmentId: appId
        // };



      
//        async function postData(url = '', data = {}) {
//            const response = await fetch(url, {
//                method: 'POST',
//                mode: 'cors',
//                cache: 'no-cache',
//                credentials: 'same-origin',
//                headers: {
//                    'Content-Type': 'application/json'
//
//                },
//                redirect: 'follow',
//                referrerPolicy: 'no-referrer',
//                body: JSON.stringify(data)
//            });
//            return response.json();
//        }
//        postData('http://localhost:8080/bookings', { patientName: "Kos", patientEmail: "email@gmail.com", appointmentId: 638 })
//            .then(data => {
//                console.log(data);
//            });
//    }

    render() {
        const filteredAppointments = this.state.appointments.filter(app => {
            return app.name.includes(this.state.docSelect) & app.date.includes(this.state.date) & app.available === true})




        return (
            <React.Fragment>
                <h2>Book an appointment with one of our doctors</h2>
                <form onSubmit={(e)=>this.addAppointment(e)}>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" name="email" value={this.state.patientEmail} onChange={(e)=>this.setState({patientEmail: e.target.value})}
                        className="form-control" id="inputEmail"
                            aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Patient Name</label>
                        <input type="text" name="name" value={this.state.patientName} onChange={(e)=>this.setState({patientName: e.target.value})}
                        className="form-control" id="inputName" aria-describedby="nameHelp"
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
                    <BookSpotList onSelect={(value) => this.setState({ selectedAppId: value })} appointments={filteredAppointments} />

                    {/* <div id="bookSpotContainer" className="d-none">
                        <div id="bookSpot" className="text-white mr-auto"></div>
                    </div> */}

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                        <label className="form-check-label" htmlFor="exampleCheck1">I consent to processing of
                                the personal data </label>
                    </div>

                    <button className="btn btn-primary" >Submit</button>
                </form>





            </React.Fragment>

        );
    }
}

export default App;