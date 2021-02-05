import React, { Component } from 'react';
import Button from '../components/Button';
import Container from '../components/container';
import Product from '../components/Product';
import {FiChevronRight} from "react-icons/fi"
import Video from '../components/Video';
class Main extends Component {
    render() {
        return (
            <div className="main">
                <Container>
                <div className="d-flex">
                        <p>Supi</p>
                        <p>Xachapuri</p>
                        <p>Xachapuri</p>
                        <p>Xachapuri</p>
                        <p>Xachapuri</p>
                        <FiChevronRight/>
                    </div>
                    <h1>Vse tovari</h1>

                    <div className="all-products">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        
                    </div>

                    <div className="pagination">
                        <Button title="1" />
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>...</p>
                        <p>8</p>
                        <p><FiChevronRight/></p>
                    </div>
                </Container>
                <Video/>
            </div>
        );
    }
}

export default Main;
