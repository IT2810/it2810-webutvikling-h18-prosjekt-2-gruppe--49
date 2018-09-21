import React, {Component} from 'react';
import Text from "./Text.js";
import Image from "./Image.js";

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNumber: props.tabNumber,
            textName: props.textName,
            currentText: props.tabNumber,
            imageCategory: props.imageCategory,
            currentImage: props.tabNumber + 1,
            soundCategory: props.soundCategory,
            currentSound: props.tabNumber + 1,
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        let nextTabNumber = (((this.state.tabNumber - 1) + 4) % 4);
        this.setState({
            tabNumber: nextTabNumber,
            currentText: nextTabNumber,
            currentImage: nextTabNumber + 1,
            currentSound: nextTabNumber + 1
        });
    }

    next() {
        let nextTabNumber = ((this.state.tabNumber + 1) % 4);
        this.setState({
            tabNumber: nextTabNumber,
            currentText: nextTabNumber,
            currentImage: nextTabNumber + 1,
            currentSound: nextTabNumber + 1
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                textName: this.props.textName,
                imageCategory: this.props.imageCategory,
                soundCategory: this.props.soundCategory
            });
        }
    }

    render() {
        return (
            <div className="App-display">
                <button className="Display-prevButton" onClick={this.previous}>&#8249;</button>
                <Image imageCategory={this.state.imageCategory} imageNumber={this.state.currentImage}/>
                <Text textName={this.state.textName} textNumber={this.state.currentText}/>
                <audio className="Display-audio"
                       src={"sound/" + this.state.soundCategory + "/" + this.state.currentSound + ".mp3"} controls
                       autoPlay loop/>
                <button className="Display-nextButton" onClick={this.next}>&#8250;</button>
            </div>
        );
    }
}


export default Display;
