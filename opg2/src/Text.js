import React, {Component} from 'react';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: null,
            songName: props.songName
        };
    }

    componentDidMount() {
        fetch('text/' + this.state.songName + '.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <div className="Display-text">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="Display-text">Loading...</div>;
        } else {
            let text = "";

            for (let j = 0; j < this.state.items.songVerses[0].length; j++) {
                text += this.state.items.songVerses[0][j];
                text += '\n';
            }
            text += '\n';

            /*else {
            let text = "";
            for (let i in this.state.items.songVerses) {
                for (let j = 0; j < this.state.items.songVerses[i].length; j++) {
                    text += this.state.items.songVerses[i][j];
                    text += '\n';
                }
                text += '\n';
            }*/
            return (
                <div className="Display-text" id="text">
                    {text}
                </div>
            );
        }
    }

}

export default Text;
