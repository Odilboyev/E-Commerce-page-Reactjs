import React, { Component } from 'react';

class Link extends Component {
    render() {
        const {link, title} = this.props
        return (
            
                <a href={link}>{title}</a>
           
        );
    }
}

export default Link;
