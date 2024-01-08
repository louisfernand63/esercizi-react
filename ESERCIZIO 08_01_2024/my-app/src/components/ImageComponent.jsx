import React, { Component } from 'react'

export default class ImageComponent extends Component {
    render() {
        return (
            <img src={this.props.image} alt={this.props.title} srcset="" />
        )
    }
}
