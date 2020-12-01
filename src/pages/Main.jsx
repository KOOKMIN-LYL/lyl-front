import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import 'style/Main.css';
import main1 from 'main1.jpg';
import main2 from 'main2.jpg';
import Api from 'api/API';

const Main = () => {
    const [top10Products, setTop10Products] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);

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
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    const makeTop10 = top10Products.map((product) => {
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

    const makeRecent = recentProducts.map((product) => {
        return (
            <li className="box" key={product.productNumber}>
                <div className="recentItem">
                    <img src={product.imagePath} width="100%" alt=""></img>
                    <Link to={`product/${product.productNumber}`} className="productLink">
                        <div className="about">
                            <p className="name">{product.name}</p>
                            <p className="price">{product.price} won</p>
                        </div>
                    </Link>
                </div>
            </li>
        )
    })

    useEffect(() => {
        const getMainImage = async () => {
            await Api
                .getMainImage()
                .then((res) => {
                    setTop10Products(res.data.top10Products);
                    if (res.data.recentProducts !== undefined) {
                        setRecentProducts(res.data.recentProducts);
                    }
                });
        };

        getMainImage();
    }, [setTop10Products])

    return (
        <>
            <div className="mainImage">
                <Slider {...mainSettings}>
                    <img src={main1} alt=""></img>
                    <img src={main2} alt=""></img>
                    {/* {makeMainImge} */}
                </Slider>
            </div>
            {

                (recentProducts.length === 0)
                    ? (<></>)
                    : (
                        <div className="bestSeller">
                            <div className="mainHeader">Recent Items</div>
                            <Slider className="recentSlider" {...settings}>
                                {makeRecent}
                            </Slider>
                        </div>
                    )


            }
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