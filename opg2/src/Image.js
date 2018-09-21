import React, {Component} from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: null,
            imageCategory: props.imageCategory,
            imageNumber: (Math.floor(Math.random() * 4 + 1))
        };
    }

    componentDidMount() {
        fetch("svg/" + this.state.imageCategory + "/" + this.state.imageNumber + ".svg")
            .then(res => res.text())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    items: data
                });
            },)
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <svg dangerouslySetInnerHTML={{__html: this.state.items}}/>
            );
        } else {
            return (
                "Loading..."
            )
        }
    }

}

export default Image;