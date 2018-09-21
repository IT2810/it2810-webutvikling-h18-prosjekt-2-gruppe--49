import React, { Component } from 'react';
import _ from 'lodash'

class Controller extends Component {
    render() {
        return (
            <div className="App-controller">
                <RadioGroup name="Image" value1="Air" value2="Land" value3="Sea" />
                <RadioGroup name="Sound" value1="Wind" value2="Ground" value3="Waves" />
                <RadioGroup name="Text" value1="Steve Miller Band" value2="Mastodon" value3="Beach Boys" />
            </div>
        )
    }
}
function RadioGroup (props) {
    return (
        <div className="Controller-RadioGroup">
            <Radio name={props.name} value={props.value1} />
            <Radio name={props.name} value={props.value2} />
            <Radio name={props.name} value={props.value3} />
        </div>
    )
}
function Radio (props) {
    const id = _.uniqueId("prefix-");

    return (
        <div>
            <input id={id} type="radio" name={props.name} value={props.value} />
            <label for={id}>{props.value}</label>
        </div>
    )
}

export default Controller;
