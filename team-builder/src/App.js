import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm'
import TeamMates from './components/TeamMates'
import ReactDom from "react-dom";


function App() {
  const [teamMates, setTeamMates] = useState(
    {
      id: 1, 
      firstName: '',
      lastName: "", 
      age: Number, 
      height: Number,
      weight: Number, 
      height: Number,
      job_D: ""

     }
  ) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Team Form
        </p>
          <TeamForm />
          <TeamMates />
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
