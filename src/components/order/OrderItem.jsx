import React from 'react';
import { Link } from 'react-router-dom';
import 'style/Cart.css';
import img from '1.jpg';

const OrderItem = ({ productId, name, option, price, quantity }) => {
    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <tr>
            <td>
                <Link to={`/product/${productId}`}><img src={img} width="90" alt=""></img></Link>
            </td>
            <td>
                {name}
                <div>[옵션: {option}] </div>
            </td>
            <td>{numberFormat(price)} won</td>
            <td>{quantity}</td>
            <td>{numberFormat(quantity * price)} won</td>
        </tr>
    );
};
export default OrderItem;