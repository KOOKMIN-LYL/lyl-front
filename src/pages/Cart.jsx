import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Api from 'api/API';
import CartItem from 'components/cart/CartItem';
import 'style/Cart.css';

const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const makeCartList = cartList.map((cartItem) => {
        return (
            <CartItem
                key={cartItem.productId}
                id={cartItem.productId}
                name={cartItem.productName}
                option={cartItem.checkedOption}
                price={cartItem.productPrice}
                count={cartItem.productCount}
                cartList={cartList}
                setCartList={setCartList}></CartItem>
        )
    })

    useEffect(() => {
        const getCart = async () => {
            await Api
                .getCart()
                .then((res) => {
                    console.log(res.data);
                    //setCartList(res.data.cartList);
                });
        };

        getCart();
    }, [setCartList])

    useEffect(() => {
        setTotalPrice(numberFormat(cartList.reduce((acc, cur) => {
            return acc + cur.productPrice*cur.productCount;
        }, 0)))
    }, [setTotalPrice, cartList])

    return (
        <div className="cartC">
            <h5 className="cartTitle">장바구니</h5>
            <div className="cartProducts">
                <table>
                    <thead>
                        <tr>
                            {/* <th><input checked={allChecked} onChange={handleAll} type="checkbox"></input></th> */}
                            <th>이미지</th>
                            <th>싱품정보</th>
                            <th>판매가</th>
                            <th>수량</th>
                            <th>선택</th>

                        </tr>
                    </thead>
                    <tbody>
                        {makeCartList}
                    </tbody>
                </table>
            </div>
            <div className="totalPrice">
                <table border="1">
                    <thead>
                        <tr>
                            <th>결제예정금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{totalPrice} won</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="orderBtn">
                <Button variant="dark">전체상품주문</Button>
                <Button variant="secondary">선택상품주문</Button>
                <Button variant="light">쇼핑계속하기</Button>
            </div>
        </div>
    );
};
export default Cart;