import React, { Component } from 'react';
import Text from "./Text.js";
import Image from "./Image.js";

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNumber: props.tabNumber,
            songName: props.songName,
            imageCategory: props.imageCategory,
            soundCategory: props.soundCategory
        };
    }

    render() {
        return (
            <div className="App-display">
                <Image imageCategory={this.state.imageCategory}/>
                <Text songName={this.state.songName}/>
                <audio controls autoPlay>
                    <source src={"sound/"+this.state.soundCategory+"/1.mp3"} type="audio/mpeg"/>
                </audio>
            </div>
        )
    }
}

export default Display;
