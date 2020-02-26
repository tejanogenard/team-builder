import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from "react-dom";
import teamMates from "./components/teamMates"
import teamForm from "./components/teamForm"

function App() {
  const [teamMates, setTeamMates] = useState(
    {
      id: 1, 
      firstName: '',
      lastName: "", 
      age: Number, 
      height: Number,
      weight: Number, 
      job_Description: ""


     }
  ) 





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
