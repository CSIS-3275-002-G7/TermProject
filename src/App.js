import React, { Component } from 'react';
import BookSpotList from './BookSpotList';
import DocSelect from './DocSelect'
import { appointments } from './Appointments';


class App extends Component {
    state = {
        appointments: appointments,
        docSelect: ''
    }
    render() {
        return (
            <div>
                <DocSelect />
                <BookSpotList appointments={this.state.appointments} />
            </div>);
    }
}

export default App;