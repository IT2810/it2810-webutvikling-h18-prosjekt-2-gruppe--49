import React, {Component} from 'react';
import _ from 'lodash'

class Controller extends Component {


    constructor(props) {
        super(props);
        this.state = {
            callBack: props.callBack
        };
    }

    render() {
        return (
            <div className="App-controller">
                <RadioGroup callBack={this.state.callBack} name="Image" value1="Air" value2="Earth" value3="Water"/>
                <RadioGroup callBack={this.state.callBack} name="Sound" value1="Air" value2="Earth" value3="Water"/>
                <RadioGroup callBack={this.state.callBack} name="Text" value1="Steve Miller Band" value2="Mastodon"
                            value3="Beach Boys"/>
            </div>
        )
    }
}

function RadioGroup(props) {
    return (
        <div className="Controller-RadioGroup">
            <div className="Controller-Header">{props.name}</div>
            <Radio callBack={props.callBack} name={props.name} value={props.value1}/>
            <Radio callBack={props.callBack} name={props.name} value={props.value2}/>
            <Radio callBack={props.callBack} name={props.name} value={props.value3}/>
        </div>
    )
}

function Radio(props) {


    const id = _.uniqueId("prefix-");
    return (
        <div>
            <input onChange={(e) => props.callBack(e.target.name, e.target.value.split(" ").join("_"))} id={id}
                   type="radio" name={props.name} value={props.value}/>
            <label htmlFor={id}>{props.value}</label>
        </div>
    )
}

export default Controller;
