import React, { useEffect, useState } from 'react';
import Api from 'api/API';
import 'style/History.css';

const History = () => {

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // const makeCartList = cartList.map((cartItem) => {
    //     return (
    //         <div></div>
    //     )
    // })

    useEffect(() => {
        const getAllOrder = async () => {
            await Api
                .getAllOrder()
                .then((res) => {
                    console.log(res.data);
                });
        };

        getAllOrder();
    })

    return (
        <div className="historyC">
            <h5 className="historyTitle">장바구니</h5>
            <div className="historyProducts">
                <table>
                    <thead>
                        <tr>
                            <th>주문번호</th>
                            <th>이미지</th>
                            <th>싱품정보</th>
                            <th>판매가</th>
                            <th>수량</th>
                            <th>선택</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {makeCartList} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default History;