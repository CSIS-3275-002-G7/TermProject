import React, { Component } from 'react';


class DocSelect extends Component {
    state = {}

    // showAppointments(event) {
    //     console.log(event);
    //     // document.getElementById("appList").className = "d-block";
    // };

    componentDidMount() {
        document.getElementById("docSelect").selectedIndex = -1;
    };

    render() {
        return (
            <div>
                <div className="col-auto my-1">
                    <label className="mr-sm-2" htmlFor="docSelect">Doctor</label>
                    <br />
                    <select className="custom-select mr-sm-2 my-2" id="docSelect" name="docSelect"
                        aria-describedby="docHelp" disabled onChange={this.props.onSelect}>
                        <option value="Frank">Frank Kinney</option>
                        <option value="Polly">Polly Walter</option>
                        <option value="Jennie">Jennie Clark</option>
                        <option value="Elmer">Elmer Briggs</option>
                    </select>
                    <div id="docHelp" className="form-text">Please choose a doctor to view the schedule for selected
                            date</div>
                </div>
            </div>
        );

    }
};

export default DocSelect;