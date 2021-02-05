import React, { Component } from 'react';
import '../styles/style.css'
import Container from './container';
import Link from './Link';
import Logo from "./logo";
import {FiPhone, FiUser, FiShoppingCart} from "react-icons/fi"
class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="nav">
                <Container>
                <Logo/>
                <ul className="links">
                    <li><Link link = "#" title = "Menu" /></li>
                    <li><Link link = "#" title = "Dostavka" /></li>
                    <li><Link link = "#" title = "Oplata" /></li>
                    <li><Link link = "#" title = "Bron stola" /></li>
                    
                    <li className="phNum"><FiPhone /><p>+7(831)282-60-00</p></li>
                    <li><FiUser/></li>
                    <li><FiShoppingCart/></li>
                </ul>

                </Container>

                </nav>

            </div>
        );
    }
}

export default Navbar;
