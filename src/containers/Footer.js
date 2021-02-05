import React, { Component } from 'react';
import Container from '../components/container';
import '../styles/style.css'
import {FiChevronRight, FiUser} from "react-icons/fi"
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <div className="w-50">
                        <div>
                        <ul>
                            <li><p> Lorem, ipsum dolor. </p></li>
                            <li><h3>+089589024784634</h3></li>
                        </ul>
                        <ul>
                            <li><p> Lorem, ipsum dolor. </p></li>
                            <li><h3>+089589024784634</h3></li>
                        </ul>
                        </div>
                        <ul>
                            <li><p>Lorem ipsum dolor sit amet.</p></li>
                            <li><h3> Email Lorem, ipsum dolor.</h3></li>
                            <li><h3> Podderjka</h3></li>
                        </ul>
                    <div className="endOfFooter">
                        <p>©2021 Lorem</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                    </div>

                    
                    <div className="w-50">
                    <div>
                        <ul>
                            <li><h1>Mi v Kontakte <FiChevronRight/> </h1></li>
                            <li><h1>Mi v Instagrame <FiChevronRight/> </h1></li>
                        </ul>
                        <ul>
                            <li><p> <FiUser/> Voyti/registratsiya</p></li>
                        </ul>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;
