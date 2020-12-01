import React, { useEffect, useState } from 'react';
import OrderItem from 'components/order/OrderItem';
import Api from 'api/API';
import 'style/Order.css';

const HistoryDetail = ({ match }) => {
    const [orderList, setOrderList] = useState([]);
    const [user, setUser] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [receiver, setReceiver] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
    })

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
                img={orderItem.imagePath}
            >
            </OrderItem>
        )
    })

    useEffect(() => {
        const getOrder = async () => {
            await Api
                .getOrder(match.params.id)
                .then((res) => {
                    setReceiver(res.data.orderDeliveryInfos[1]);
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="orderC">
                <h5 className="orderTitle">주문 내역</h5>
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
                                <th>결제한 금액</th>
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
                    배송 정보
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>배송 받으시는 분</th>
                                <td>{receiver.name}</td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td>{receiver.address}</td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td>{receiver.phone}</td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>{receiver.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default HistoryDetail;