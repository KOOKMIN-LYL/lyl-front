import React from 'react';
import { Link } from 'react-router-dom'
import 'style/Signup.css';

const Mypage = () => {
    return (
        <>
            <div className="signupC">
                <Link to="/profile" className="headerLink" ><h5 className="signupTitle">내 정보</h5></Link>
                <Link to="/history" className="headerLink" ><h5 className="signupTitle">주문 내역</h5></Link>
            </div>
        </>
    );
};
export default Mypage;