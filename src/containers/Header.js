import React, { Component } from 'react';
import Navbar from '../components/Navbar';
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: "",
            age: ""
        }

    }
    componentDidMount() {
        this.setState({user:"samandar", age:15})
        console.log("componentdd")
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <Navbar/>
            </div>
        );
    }
}

export default Header;
