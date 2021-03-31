import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [testingValue, setTestingValue] = React.useState("Loading from db...");

  React.useEffect(function() {
    fetch("http://localhost:8080/test")
      .then(response => response.json())
      .then(function(data) {
        setTestingValue(data[0].keyInAtlas)
      })
      .catch(console.warn)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <div>Value Below comes from mongo atlas cloud database:</div>
        <div>{testingValue}</div>
      </header>
    </div>
  );
}

export default App;
