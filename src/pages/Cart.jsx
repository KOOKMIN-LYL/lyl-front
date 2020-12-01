import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Api from 'api/API';
import CartItem from 'components/cart/CartItem';
import UserContext from 'context/UserContext';
import 'style/Cart.css';
import Cookies from 'js-cookie';

const Cart = ({ history }) => {
    const [cartList, setCartList] = useState([]);
    const [orderId, setOrderId] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [update, setUpdate] = useState(false);
    const { setIsLogged } = useContext(UserContext);

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const makeCartList = cartList.map((cartItem) => {
        return (
            <CartItem
                key={cartItem.id}
                orderId={orderId}
                cartId={cartItem.id}
                productId={cartItem.productId}
                img={cartItem.imagePath}
                name={cartItem.productName}
                optionId={cartItem.productOptionId}
                option={cartItem.productOptions}
                price={cartItem.productPrice}
                quantity={cartItem.quantity}
                update={update}
                setUpdate={setUpdate}>
            </CartItem>
        )
    })

    const orderAll = (e) => {
        e.preventDefault();

        if (cartList[0] === undefined) {
            alert('주문할 상품이 없습니다.')
        }
        else if (window.confirm("상품을 주문하시겠습니까??") === true) {

            const product = cartList.map((cartItem) => {
                return (
                    {
                        productId: cartItem.productId,
                        productOptionId: cartItem.productOptionId,
                        quantity: cartItem.quantity
                    }
                )
            })

            const buyCart = async () => {
                await Api
                    .buyCart(product)
                    .then((res) => {
                        history.push(`/order/${res.data}`);
                    })
                    .catch(err => {
                        Cookies.remove('isLogged');
                        Cookies.remove('token');
                        setIsLogged(false);
                        setUpdate(!update);
                        alert("로그아웃 되었습니다.")
                    })
            };
            buyCart();
        }
    }

    const goMain = () => {
        history.push('/')
    }

    useEffect(() => {
        const getCart = async () => {
            await Api
                .getCart()
                .then((res) => {
                    setOrderId(res.data.id);
                    setCartList(res.data.orderProducts);
                })
                .catch(err => {
                    history.push('/')
                    alert("로그아웃 되었습니다.")
                    Cookies.remove('isLogged');
                    Cookies.remove('token');
                    setIsLogged(false);
                    setUpdate(!update);
                })
        };

        getCart();
    }, [setCartList, update, setIsLogged, history])

    useEffect(() => {
        setTotalPrice(numberFormat(cartList.reduce((acc, cur) => {
            return acc + cur.productPrice * cur.quantity;
        }, 0)))
    }, [setTotalPrice, cartList])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
                <Button variant="dark" onClick={orderAll}>전체상품주문</Button>
                {/* <Button variant="secondary">선택상품주문</Button> */}
                <Button variant="light" onClick={goMain}>쇼핑계속하기</Button>
            </div>
        </div>
    );
};
export default Cart;