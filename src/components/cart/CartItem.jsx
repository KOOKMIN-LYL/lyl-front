import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Api from 'api/API';
import 'style/Cart.css';
import img from '1.jpg';

const CartItem = ({ history, orderId, cartId, productId, name, optionId, option, price, quantity, update, setUpdate }) => {
    const [count, setCount] = useState(quantity);
    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const orderOne = (e) => {
        e.preventDefault();

        const product = [
            { 
              productId : productId, 
              productOptionId:optionId, 
              quantity: quantity
             }
         ]

        const buyCart = async () => {
            await Api
                .buyCart(product)
                .then((res) => {
                    history.push(`/order/${res.data}`);
                });
        };
        buyCart();
    }

    const deleteItem = (e) => {
        e.preventDefault();

        if (window.confirm("정말 삭제하시겠습니까??") === true) {
            const id = e.target.name;

            const deleteCart = async () => {
                await Api
                    .deleteCart(id)
                    .then((res) => {
                        setUpdate(!update);
                    });
            };
            deleteCart();
        }
    }

    const quantutyHandle = (e) => {
        setCount(e.target.value);
    }

    const changeQuantity = () => {
        if (window.confirm("수량을 변경하시겠습니까??") === true) {
            const changeQuantity = async () => {
                await Api
                    .changeQuantity(orderId, productId, optionId, count)
                    .then((res) => {
                        setUpdate(!update);
                    });
            };
            changeQuantity()
                .then(alert('변경되었습니다.'));
            
        }
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
            <td><input className="input" min='1' type='number' value={count} onChange={quantutyHandle}></input><Button variant="dark" size="sm" onClick={changeQuantity}>변경</Button></td>
            <td className="buttons">
                <Button variant="dark" size="sm" onClick={orderOne}>주문하기</Button>
                <Button variant="light" size="sm">관심상품등록</Button>
                <Button onClick={deleteItem} name={cartId} variant="light" size="sm">삭제</Button>
            </td>
        </tr>
    );
};
export default withRouter(CartItem);