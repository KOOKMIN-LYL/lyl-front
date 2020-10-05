import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'

import { Link } from 'react-router-dom';

import 'style/Main.css';
import img from '1.jpg';
import main1 from 'main1.jpg';
// import main2 from 'main2.jpg';
import Api from 'api/API';

const Main = () => {
    const [mainImage, setMainImage] = useState([]);

    const mainSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const makeMainImge = mainImage.map((product) => {
        return (
            <Link to={`product/${product.productId}`} key={product.productId}>
                <img src={main1} alt=""></img>
            </Link>
        )
    })

    useEffect(() => {
        const getMainImage = async () => {
            await Api
                .getMainImage()
                .then((res) => {
                    setMainImage(res.data.products)
                });
        };

        getMainImage();
    }, [setMainImage])

    return (
        <>
            <div className="mainImage">
                <Slider {...mainSettings}>
                    {makeMainImge}
                </Slider>
            </div>
            <div className="bestSeller">
                <Slider {...settings}>
                    <div>
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="300px" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="product/2" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="300px" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </div>
                </Slider>
            </div>
        </>
    );
};
export default Main;