import React, {Component} from 'react';
import _ from 'lodash'

class Controller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            callBack: props.callBack,
            selectedImage: "Air",
            selectedSound: "Air",
            selectedText: "Steve Miller Band"
        };
        this.setValue = this.setValue.bind(this);
    }

    setValue(type, value) {
        if (type === "Image") {
            this.setState({
                selectedImage: value
            });
        } else if (type === "Sound") {
            this.setState({
                selectedSound: value
            });
        } else if (type === "Text") {
            this.setState({
                selectedText: value
            });
        }
    }

    render() {
        return (
            <div className="App-controller">
                <RadioGroup callBack={this.state.callBack} setValue={this.setValue}
                            checkedValue={this.state.selectedImage} name="Image" value1="Air" value2="Earth"
                            value3="Water"/>
                <RadioGroup callBack={this.state.callBack} setValue={this.setValue}
                            checkedValue={this.state.selectedSound} name="Sound" value1="Air" value2="Earth"
                            value3="Water"/>
                <RadioGroup callBack={this.state.callBack} setValue={this.setValue}
                            checkedValue={this.state.selectedText} name="Text" value1="Steve Miller Band"
                            value2="Mastodon" value3="Beach Boys"/>
            </div>
        )
    }
}

function RadioGroup(props) {
    return (
        <div className="Controller-RadioGroup">
            <div className="Controller-Header">{props.name}</div>
            <Radio callBack={props.callBack} setValue={props.setValue} name={props.name} value={props.value1}
                   checked={props.checkedValue}/>
            <Radio callBack={props.callBack} setValue={props.setValue} name={props.name} value={props.value2}
                   checked={props.checkedValue}/>
            <Radio callBack={props.callBack} setValue={props.setValue} name={props.name} value={props.value3}
                   checked={props.checkedValue}/>
        </div>
    )
}

function Radio(props) {
    const id = _.uniqueId("prefix-");
    return (
        <div>
            <input
                onChange={
                    (e) => {
                        props.callBack(e.target.name, e.target.value.split(" ").join("_"));
                        props.setValue(e.target.name, e.target.value)
                    }
                }
                id={id} type="radio" name={props.name} value={props.value} checked={props.checked === props.value}/>
            <label htmlFor={id}>{props.value}</label>
        </div>
    )
}

export default Controller;
