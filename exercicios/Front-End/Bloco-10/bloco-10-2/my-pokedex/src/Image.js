import React, { Component } from "react";

class Image extends Component {
    render() {
        const item = this.props.source
        return(
            <img src={item} alt="algo deu errado"></img>
        )
    }
}

export default Image