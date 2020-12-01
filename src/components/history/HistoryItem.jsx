import React from 'react';
import 'style/Cart.css';
import { Link } from 'react-router-dom';

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
                    ? <td><Link to={`/historydetail/${id}`} className="productLink">{name}</Link></td>
                    : <td><Link to={`/historydetail/${id}`} className="productLink">{name} 외 {count - 1} 종</Link></td>
            }
            <td>{numberFormat(price)}</td>


        </tr>
    );
};
export default HistoryItem;