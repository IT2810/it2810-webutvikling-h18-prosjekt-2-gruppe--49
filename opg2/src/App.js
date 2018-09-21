import React, {Component} from 'react';
import './App.css';
import Display from './Display';
import Controller from './Controller'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNumber: 1,
            songName: "beach_boys",
            imageCategory: "air",
            soundCategory: "earth"
        };
    }

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Group 49</h1>
                </header>
                <div className="App-body">
                    <Display tabNumber={this.state.tabNumber} imageCategory={this.state.imageCategory}
                             songName={this.state.songName} soundCategory={this.state.soundCategory}/>
                    <Controller/>
                </div>
            </div>
        )
    }
}

export default App;
