import React, { Component } from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: null,
            image: "air/dove"
        };
    }

    componentDidMount() {
        fetch ("svg/"+this.state.image+".svg")
            .then(res => res.text())
            .then((data) => {
                console.log(data);
                this.setState({
                    isLoaded: true,
                    items: data
                });
            },)
    }

    render() {
        if (this.state.isLoaded) {
            let image = this.state.items;
            console.log(image);
            return (
                <svg dangerouslySetInnerHTML={{__html: image}} />
            );
        } else {
            return (
                "Loading..."
            )
        }
    }

}

export default Image;