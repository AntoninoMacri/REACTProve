/*
import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;*/

import React from 'react';
import Contatore from './Contatore';
import FormControllato from './FormControllato'

function App() {
  return (
    <div>
      <h1>La mia applicazione Contatore in React </h1>
      <Contatore />
      <FormControllato />
      </div>
  );
}

export default App;



/*

import React from 'react';
import Contatore from './Contatore';

function App() {
  return (
    <div>
      <h1>La mia prima applicazione in React </h1>
      Ciao Mondo!
      </div>
  );
}

export default App;*/