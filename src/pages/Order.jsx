import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import OrderItem from 'components/order/OrderItem';
import Api from 'api/API';
import 'style/Order.css';

const Order = ({ match }) => {
    const [orderList, setOrderList] = useState([]);
    const [user, setUser] = useState({});
    const [receiver, setReceiver] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
    });
    const [totalPrice, setTotalPrice] = useState(0);

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const makeOrderList = orderList.map((orderItem) => {
        return (
            <OrderItem
                key={orderItem.id}
                productId={orderItem.productId}
                name={orderItem.productName}
                option={orderItem.productOptions}
                price={orderItem.productPrice}
                quantity={orderItem.quantity}
            >
            </OrderItem>
        )
    })

    const same = () => {
        setReceiver(user);
    }

    const handleName = (e) => {
        setReceiver({
            ...receiver,
            name: e.target.value,
        });
    }

    const handleAddress = (e) => {
        setReceiver({
            ...receiver,
            address: e.target.value,
        });
    }

    const handlePhone = (e) => {
        setReceiver({
            ...receiver,
            phone: e.target.value,
        });
    }

    const handleEmail = (e) => {
        setReceiver({
            ...receiver,
            email: e.target.value,
        });
    }

    useEffect(() => {
        const getOrder = async () => {
            await Api
                .getOrder(match.params.id)
                .then((res) => {
                    setOrderList(res.data.orderProducts);
                });
        };

        getOrder();
    }, [match.params.id])

    useEffect(() => {
        const getUser = async () => {
            await Api
                .getUser()
                .then((res) => {
                    setUser(res.data)
                });
        };

        getUser();
    }, [setUser])

    useEffect(() => {
        setTotalPrice(numberFormat(orderList.reduce((acc, cur) => {
            return acc + cur.productPrice * cur.quantity;
        }, 0)))
    }, [setTotalPrice, orderList])

    return (
        <>
            <div className="orderC">
                <h5 className="orderTitle">주문서 작성</h5>
                <div className="orderProducts">
                    <table>
                        <thead>
                            <tr>
                                <th>이미지</th>
                                <th>싱품정보</th>
                                <th>판매가</th>
                                <th>수량</th>
                                <th>합계</th>

                            </tr>
                        </thead>
                        <tbody>
                            {makeOrderList}
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

                <div className="orderInfo">
                    주문 정보
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>주문하시는 분</th>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td>{user.address}</td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td>{user.phone}</td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="orderInfo">
                    배송 정보 <Button size="sm" variant="dark" onClick={same}>주문 정보와 동일</Button>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>주문하시는 분</th>
                                <td><input type="text" value={receiver.name} onChange={handleName}></input></td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td><input type="text" value={receiver.address} onChange={handleAddress}></input></td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td><input type="text" value={receiver.phone} onChange={handlePhone}></input></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td><input type="text" value={receiver.email} onChange={handleEmail}></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="payment">
                    <Button variant="dark">결제하기</Button>
                </div>
            </div>
        </>
    );
};
export default Order;