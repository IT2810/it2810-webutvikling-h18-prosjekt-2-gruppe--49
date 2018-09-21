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
            for (let i = 0; i < this.state.text.songVerses[this.props.textNumber].length; i++) {
                text += this.state.text.songVerses[this.props.textNumber][i];
                text += '\n';
            }
            return (
                <div className="Display-text" id="text">
                    {text}
                </div>
            );
        } else {
            return <div className="Display-text">Loading text...</div>;
        }
    }
}

export default Text;
