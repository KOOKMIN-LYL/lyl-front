import React from 'react';

import { Link } from 'react-router-dom';

import 'style/Main.css';
import img from '1.jpg';

const Main = () => {
    return (
        <div className="bestSeller">
            <Link to="product" className="productLink">
                <div className="bestSellerItem">
                    <img src={img} width="300px"></img>
                    <h5>MARIA KROSS</h5>
                    <h5>99,000 won</h5>
                </div>
            </Link>
            <Link to="product" className="productLink">
                <div className="bestSellerItem">
                    <img src={img} width="300px"></img>
                    <h5>MARIA KROSS</h5>
                    <h5>99,000 won</h5>
                </div>
            </Link>
            <Link to="product" className="productLink">
                <div className="bestSellerItem">
                    <img src={img} width="300px"></img>
                    <h5>MARIA KROSS</h5>
                    <h5>99,000 won</h5>
                </div>
            </Link>
        </div>
    );
};
export default Main;