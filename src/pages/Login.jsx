import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Api from 'api/API';
import Cookies from 'js-cookie';
import 'style/Login.css';

const Login = ({history}) => {
    const id = useRef();
    const password = useRef();

    const submitSignUp = async (e) => {
        e.preventDefault();

        const user = {
            username: id.current.value,
            password: password.current.value,
            _csrf: Cookies.get('XSRF-TOKEN'),
        };
        
        await Api
            .login(user)
            .then((res) => {
                console.log(res.data);
                history.push('/')
            })
    }

    return (
        <>
            <div className="loginC">
                <h5 className="loginTitle">로그인</h5>
                <form onSubmit={submitSignUp}>
                    <ul>
                        <li>
                            <label className="id">아이디</label>
                            <input type="text" ref={id} maxLength="20" placeholder="" />
                        </li>
                        <li>
                            <label className="password">비밀번호</label>
                            <input type="password" ref={password} maxLength="20" placeholder="" />
                        </li>
                    </ul>
                    <Button type="submit" variant="dark" block>로그인하기</Button>
                    <div className="links">
                        <Link to="/login" className="link">아이디찾기</Link>
                        <Link to="/" className="link linkCenter">비밀번호찾기</Link>
                        <Link to="/signup" className="link">회원가입</Link>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Login;