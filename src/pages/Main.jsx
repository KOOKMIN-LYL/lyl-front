import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'style/Main.css';
import img from '1.jpg';
import main1 from 'main1.jpg';
import main2 from 'main2.jpg';
import Api from 'api/API';

const Main = () => {
    // const [mainImage, setMainImage] = useState([]);
    const [top10, setTop10] = useState([]);

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
        autoplaySpeed: 10000,
    };

    const makeTop10 = top10.map((product) => {
        return (
            <li className="box" key={product.productNumber}>
                <Link to={`product/${product.productNumber}`} className="productLink">
                    <div className="bestSellerItem">
                        <img src={product.imagePath} width="100%" alt=""></img>
                        <div className="about">
                            <p className="name">{product.name}</p>
                            <p className="price">{product.price} won</p>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })

    useEffect(() => {
        const getMainImage = async () => {
            await Api
                .getMainImage()
                .then((res) => {
                    console.log(res.data);
                    setTop10(res.data.top10Products)
                });
        };

        getMainImage();
    }, [setTop10])

    console.log(top10);

    return (
        <>
            <div className="mainImage">
                <Slider {...mainSettings}>
                    <img src={main1} alt=""></img>
                    <img src={main2} alt=""></img>
                    {/* {makeMainImge} */}
                </Slider>
            </div>
            <div className="bestSeller">
                <div className="mainHeader">Top 10</div>
                <ul className="gird4">
                    {makeTop10}
                </ul>
                {/* <div >
                    <Button variant="dark">View More</Button>
                </div> */}
            </div>

        </>
    );
};
export default Main;