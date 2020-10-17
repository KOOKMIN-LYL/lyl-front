import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import 'style/Cart.css';
import img from '1.jpg';

const CartItem = ({ id, name, option, price, count, cartList, setCartList }) => {
    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const deleteItem = (e) => {
        setCartList(cartList.filter(product => product.productId !== Number(e.target.name)))
    }

    return (
        <tr>
            <Link to={`product/${id}`}><td> <img src={img} width="90" alt=""></img></td></Link>
            <td>
                {name}
                <div>[옵션: {option}] </div>
            </td>
            <td>{numberFormat(price)} won</td>
            <td><input value={count}></input><Button variant="dark" size="sm">변경</Button></td>
            <td className="buttons">
                <Button variant="dark" size="sm">주문하기</Button>
                <Button variant="light" size="sm">관심상품등록</Button>
                <Button onClick={deleteItem} name={id} variant="light" size="sm">삭제</Button>
            </td>
        </tr>
    );
};
export default CartItem;