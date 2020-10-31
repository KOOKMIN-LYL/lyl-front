import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import 'style/Product.css'
import Api from 'api/API';
import img from '1.jpg';
import Cookies from 'js-cookie';

const Product = ({ match, history }) => {
    const [product, setProduct] = useState({
        price: 0,
        productOptionDetails: []
    });

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const makeOption = product.productOptionDetails.map((option, key) => {
        return (
            <option key={option.id} value={option.option}>{option.option}</option>
        )
    });

    let optionId = null;

    const handleOption = (e) => {
        if (e.target.value !== 'default') {
            optionId = product.productOptionDetails.filter((option) => option.option === e.target.value)[0].id;
        }
        else {
            optionId = null;
        }
    }

    const addCart = (e) => {
        e.preventDefault();

        if (!Cookies.get('isLogged')) {
            alert('로그인이 필요합니다');
            history.push('/login');
        }
        else if (optionId === null) {
            alert('옵션을 선택해주세요.');
        }
        else {
            if (window.confirm("장바구니에 추가하시겠습니까??") === true) {
                const addCart = async () => {
                    await Api
                        .addCart(match.params.id, optionId)
                        .then((res) => {
                        });
                };
                addCart()
                    .then(() => {
                        history.push('/cart')
                    });
            }
        }
    }
    const orderProduct = () => {
        if (!Cookies.get('isLogged')) {
            alert("로그인이 필요합니다");
            history.push('/login');
        }
        else {

        }
    }

    useEffect(() => {
        const getProduct = async () => {
            await Api
                .getProduct(match.params.id)
                .then((res) => {
                    setProduct(res.data);
                });
        };

        getProduct();
    }, [match.params.id])

    return (
        <>
            <div className="imgArea">
                <div className="img">
                    <img src={img} alt=""></img>
                </div>
            </div>
            <div className="detailArea">
                <div className="productName">
                    <h4>{product.name}</h4>
                </div>
                <div className="productDetail">
                    <table>
                        <tbody>
                            <tr>
                                <td className="price" colSpan="2">{`${numberFormat(product.price)} won`}</td>
                            </tr>
                            {/* <tr>
                                <th>제조사</th>
                                <td>자체제작</td>
                            </tr>
                            <tr>
                                <th>원산지</th>
                                <td>국내</td>
                            </tr>
                            <tr>
                                <th>상품코드</th>
                                <td>P0000BND</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
                <div className="productOption">
                    <table>
                        <tbody>
                            <tr>
                                <th>옵션</th>
                                <td><select onChange={handleOption}>
                                    <option value="default">- [필수] 옵션을 선택해 주세요 -</option>
                                    <option value="**" disabled>-------------------</option>
                                    {makeOption}
                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="buttonArea">
                    <Button variant="dark" className="darkBtn" block onClick={orderProduct}>BUY NOW</Button>
                    <Button variant="secondary" className="darkBtn" block onClick={addCart}>ADD TO CART</Button>
                    {/* <Button variant="secondary" className="greyBtn">WISHLIST</Button> */}
                </div>
            </div>
        </>
    )
};
export default Product;