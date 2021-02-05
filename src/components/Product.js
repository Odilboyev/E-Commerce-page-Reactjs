import React, { Component } from 'react';
import Image from '../assets/img/card.jpg'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Button from './Button';
class Product extends Component {
    render() {
        return (
            <div className="card">
                <img src={Image} />
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic?</p>
                <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></p>
                <div>
                    <p>1050 R/kg</p>
                    <p>Za 500gr</p>
                </div>

                <Button title={"V korzinu"}/>
            </div>
        );
    }
}

export default Product;
