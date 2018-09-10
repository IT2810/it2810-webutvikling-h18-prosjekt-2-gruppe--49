import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import beach_boys from '../public/text/beach_boys';

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
//beach_boys.songVerses.verse0.join('\n')
  render() {
      const {error, isLoaded, items} = this.state;
      if (error) {
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">Welcome to React</h1>
                  </header>
                  <div id="text">
                      <p>
                          {this.state.items.songVerses[0].verse0[0]}
                          <br />
                          {this.state.items.songVerses[0].verse0[1]}
                      </p>
                  </div>
              </div>
          );
      }
  }
}
//[]
export default App;
