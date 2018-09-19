import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from "./Text.js";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          songName: "beach_boys"
      };
  }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Welcome to React</h1>
              </header>

              <Text songName={this.state.songName} />
          </div>
      );

  }
}

export default App;
