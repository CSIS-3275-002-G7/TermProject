import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App'
import BookedSpotList from './BookedSpotList';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-form')
);

ReactDOM.render(
  <React.StrictMode>
    <BookedSpotList />
  </React.StrictMode>,
  document.getElementById('booked')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
