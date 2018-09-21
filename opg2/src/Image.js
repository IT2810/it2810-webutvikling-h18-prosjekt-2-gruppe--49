import React, {Component} from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            svg: null
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
            return <div className="Display-text">"Loading image..."</div>
        }
    }
}

export default Image;
