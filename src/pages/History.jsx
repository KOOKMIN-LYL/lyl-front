import React, { useEffect, useState } from 'react';
import Api from 'api/API';
import 'style/History.css';
import HistoryItem from 'components/history/HistoryItem';

const History = () => {
    const [historyList, setHistoryList] = useState([]);

    const makeHistoryList = historyList.map((history) => {
        return (
            <HistoryItem
                key={history.id}
                id={history.id}
                img={history.orderProducts[0].imagePath}
                name={history.orderProducts[0].productName}
                price={history.orderProducts.reduce((acc, cur) => {
                    return acc + cur.productPrice * cur.quantity;
                }, 0)}
                count={history.orderProducts.length}
            >
            </HistoryItem>
        )
    })

    useEffect(() => {
        const getAllOrder = async () => {
            await Api
                .getAllOrder()
                .then((res) => {
                    setHistoryList(res.data.content)
                });
        };

        getAllOrder();
    },[setHistoryList])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div className="historyC">
            <h5 className="historyTitle">주문내역</h5>
            <div className="historyProducts">
                <table>
                    <thead>
                        <tr>
                            <th>주문번호</th>
                            <th>이미지</th>
                            <th>싱품정보</th>
                            <th>주문금액</th>

                        </tr>
                    </thead>
                    <tbody>
                        {makeHistoryList}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default History;