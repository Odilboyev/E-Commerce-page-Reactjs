import React, { Component } from 'react';
import "../styles/logo.css"
import logob from '../assets/img/logo1.png'
import logoi from '../assets/img/logo2.png'

class Logo extends Component {
    render() {
        return (
        <div className="logo">
            <img src={logob}/>
            <img src={logoi}/>
        </div>
        );
    }
}

export default Logo;
