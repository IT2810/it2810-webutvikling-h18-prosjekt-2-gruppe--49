import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          error : null,
          isLoaded: false,
          items: null
      };
  }
    componentDidMount() {
      fetch ('text/beach_boys.json')
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({
                      isLoaded: true,
                      items: result
                  });
              },
              (error) => {
                  this.setState({
                      isLoaded: true,
                      error
                  });
              }
          )
    }

  render() {
      const {error, isLoaded} = this.state;
      if (error) {
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          let text = "";
          for (let i = 0; i < this.state.items.songVerses[0].verse0.length; i++) {
              text += this.state.items.songVerses[0].verse0[i];
              text += '\n';
          }
          return (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">Welcome to React</h1>
                  </header>
                  <div id="text">
                      {text}
                  </div>
              </div>
          );
      }
  }
}

export default App;
