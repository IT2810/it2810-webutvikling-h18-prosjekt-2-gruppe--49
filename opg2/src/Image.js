import React, {Component} from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            svg: null,
            imageCategory: props.imageCategory,
            imageNumber: props.imageNumber
        };
    }

    componentDidMount() {
        fetch("svg/" + this.props.imageCategory + "/" + this.props.imageNumber + ".svg")
            .then(res => res.text())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    svg: data
                });
            },)
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            fetch("svg/" + this.props.imageCategory + "/" + this.props.imageNumber + ".svg")
                .then(res => res.text())
                .then((data) => {
                    this.setState({
                        isLoaded: true,
                        svg: data
                    });
                },)
        }
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <svg className="Display-image" dangerouslySetInnerHTML={{__html: this.state.svg}}/>
            );
        } else {
            return <div>"Loading..."</div>
        }
    }
}

export default Image;
