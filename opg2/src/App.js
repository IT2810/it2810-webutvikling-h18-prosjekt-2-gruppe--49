import React, {Component} from 'react';
import './App.css';
import Text from "./Text.js";
import Image from "./Image.js";
import Display from './Display';
import Controller from './Controller'

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
                    <h1 className="App-title">Group 49</h1>
                </header>
                <div className="App-body">
                    <Display/>
                    <Controller/>
                    <Image/>
                    <Text songName={this.state.songName}/>
                </div>
            </div>
        )
    }
}

export default App;
