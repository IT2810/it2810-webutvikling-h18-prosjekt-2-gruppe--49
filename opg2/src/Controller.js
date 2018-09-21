import React, { Component } from 'react';

class Controller extends Component {
    render() {
        return (
            <div className="App-controller">
                {/* This is where the image selectors etc. will be */}
            </div>
        )
    }
}
function RadioGroup (props) {
    return (
        <div>
            <Radio name={props.name} value={props.value1} />
            <Radio name={props.name} value={props.value2} />
            <Radio name={props.name} value={props.value3} />
        </div>
    )
}
function Radio (props) {
    return (
        <div>
            <input type="radio" name={props.name} value={props.value} />
            <label>{props.value}</label>
        </div>
    )
}

export default Controller;
