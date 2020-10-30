import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Api from 'api/API';
import 'style/Cart.css';
import img from '1.jpg';

const CartItem = ({ cartId, productId, name, option, price, count, cartList, setCartList }) => {
    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const deleteItem = (e) => {
        const deleteCart = async () => {
            await Api
                .deleteCart(e.target.name)
                .then((res) => {
                    console.log(res.data);
                    //setCartList(res.data.orderProducts);
                });
        };
    
        deleteCart();
        //setCartList(cartList.filter(product => product.productId !== Number(e.target.name)))
    }

    const quantutyHandle = () => {

    }

    return (
        <tr>
            <td>
                <Link to={`product/${productId}`}><img src={img} width="90" alt=""></img></Link>
            </td>
            <td>
                {name}
                <div>[옵션: {option}] </div>
            </td>
            <td>{numberFormat(price)} won</td>
            <td><input value={count} onChange={quantutyHandle}></input><Button variant="dark" size="sm">변경</Button></td>
            <td className="buttons">
                <Button variant="dark" size="sm">주문하기</Button>
                <Button variant="light" size="sm">관심상품등록</Button>
                <Button onClick={deleteItem} name={cartId} variant="light" size="sm">삭제</Button>
            </td>
        </tr>
    );
};
export default CartItem;