import React from 'react';
import 'style/Cart.css';

const HistoryItem = ({ id, img, name, price, count }) => {

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <tr>
            <td>{id}</td>
            <td>
                <img src={img} width="100px" alt=""></img>
            </td>
            {
                (count === 1)
                    ? <td>{name}</td>
                    : <td>{name} 외 {count-1} 종</td>
            }
            <td>{numberFormat(price)}</td>
        </tr>
    );
};
export default HistoryItem;