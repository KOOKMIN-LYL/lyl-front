import React from 'react';
import Slider from 'react-slick'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'style/Main.css';
import img from '1.jpg';
import main1 from 'main1.jpg';
import main2 from 'main2.jpg';

const Main = () => {
    // const [mainImage, setMainImage] = useState([]);

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

    // const makeMainImge = mainImage.map((product) => {
    //     return (
    //         <Link to={`product/${product.productId}`} key={product.productId}>
    //             <img src={main1} alt=""></img>
    //         </Link>
    //     )
    // })

    // useEffect(() => {
    //     const getMainImage = async () => {
    //         await Api
    //             .getMainImage()
    //             .then((res) => {
    //                 setMainImage(res.data.products)
    //             });
    //     };

    //     getMainImage();
    // }, [setMainImage])

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
                <Slider {...settings}>
                    <div>
                        <Link to="product/1" className="productLink">
                            <div className="sliderItem">
                                <img src={img} width="300px" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                        <Link to="product/1" className="productLink">
                            <div className="sliderItem">
                                <img src={img} width="300px" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="product/2" className="productLink">
                            <div className="sliderItem">
                                <img src={img} width="300px" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                        <Link to="product/1" className="productLink">
                            <div className="sliderItem">
                                <img src={img} width="300px" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </div>
                </Slider>
            </div>
            <div className="bestSeller">
                <div className="mainHeader">Recent Hot Item</div>
                <ul className="gird4">
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                    <li className="box">
                        <Link to="product/1" className="productLink">
                            <div className="bestSellerItem">
                                <img src={img} width="100%" alt=""></img>
                                <h5>MARIA KROSS</h5>
                                <h5>99,000 won</h5>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div >
                    <Button variant="dark">View More</Button>
                </div>
            </div>

        </>
    );
};
export default Main;