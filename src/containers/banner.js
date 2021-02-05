import React, { Component } from 'react';
import Container from '../components/container';
import Button  from "../components/Button";

class Banner extends Component {
    render() {
        const {title, content, button, img} = this.props
        return (
            <div>
                <Container>
                    <div className="banner">
                        <div>
                            <h1>{title}</h1>
                            <p>{content}</p>
                            <Button title={`${button}`} />
                        </div>
                        <div><img src={img}/></div>
                    </div>


                </Container>
            </div>
        );
    }
}

export default Banner;
