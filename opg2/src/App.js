import React, {Component} from 'react';
import './App.css';
import Display from './Display';
import Controller from './Controller'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNumber: 0,
            textName: "beach_boys",
            imageCategory: "air",
            soundCategory: "earth"
        };

        this.callBack = this.callBack.bind(this);
    }

    callBack(name, value) {
        if (name === "Image") {
            if (this.state.imageCategory !== value) {
                this.setState({
                    imageCategory: value
                });
            }
        } else if (name === "Sound") {
            if (this.state.soundCategory !== value) {
                this.setState({
                    soundCategory: value
                });
            }
        } else if (name === "Text") {
            if (this.state.textName !== value) {
                this.setState({
                    textName: value
                });
            }
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Group 49</h1>
                </header>
                <div className="App-body">
                    <Display tabNumber={this.state.tabNumber} imageCategory={this.state.imageCategory}
                             textName={this.state.textName} soundCategory={this.state.soundCategory}/>
                    <Controller callBack={this.callBack}/>
                </div>
            </div>
        )
    }
}

export default App;
