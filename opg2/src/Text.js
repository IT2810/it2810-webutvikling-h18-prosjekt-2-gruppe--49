import React, {Component} from 'react';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            text: null
        };
    }

    componentDidMount() {
        fetch('text/' + this.props.textName + '.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        text: result
                    });
                }
            )
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            fetch('text/' + this.props.textName + '.json')
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            text: result
                        });
                    }
                )
        }
    }

    render() {
        if (this.state.isLoaded) {
            let text = "";
            for (let j = 0; j < this.state.text.songVerses[this.props.textNumber].length; j++) {
                text += this.state.text.songVerses[this.props.textNumber][j];
                text += '\n';
            }
            return (
                <div className="Display-text" id="text">
                    {text}
                </div>
            );
        } else {
            return <div className="Display-text">Loading...</div>;
        }
    }
}

export default Text;
