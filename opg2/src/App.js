import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Controller from './Controller'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Group 49</h1>
        </header>
        <div className="App-body">
          <Display />
          <Controller />
        </div>
      </div>
    );
  }
}

export default App;
