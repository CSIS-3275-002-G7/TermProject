import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import BookSpotList from './BookSpotList';
import { appointments } from './Appointments';


ReactDOM.render(
  <React.StrictMode>
    <BookSpotList appointments={appointments} />
  </React.StrictMode>,
  document.getElementById('bookSpot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
