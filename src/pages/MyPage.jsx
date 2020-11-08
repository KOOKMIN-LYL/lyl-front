import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Api from 'api/API';
import 'style/Signup.css';

const MyPage = ({ history }) => {
    const [user, setUser] = useState({
        memberId: '',
        password: '',
        name: '',
        address: '',
        phone: '',
        email: '',
    });

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const putUser = (e) => {
        e.preventDefault();

        if (user.name === '' || user.phone === '' || user.email === '') {
            alert('입력하지 않은 항목이있습니다.')
        }

        else {
            if (window.confirm("정보를 수정하시겠습니까??") === true) {
                // const join = async () => {
                //     await Api
                //         .join(user)
                //         .then((res) => {
                //             history.push('/');
                //         });
                // };
                // join()
            }
        }
    }

    useEffect(() => {
        const getUser = async () => {
            await Api
                .getUser()
                .then((res) => {
                    setUser(res.data)
                });
        };

        getUser();
    }, [setUser])

    return (
        <>
            <div className="signupC">
                <h5 className="signupTitle">내 정보</h5>
                <form>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td>{user.memberId}</td>
                            </tr>
                            {/* <tr>
                                <th>비밀번호</th>
                                <td><input type="password" name="password" value={user.password} onChange={handleInput}></input><div className="nextInput">(영문소문자/숫자, 4~16자)</div></td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인</th>
                                <td><input type="password" name="password" value={checkPW.password} onChange={handlePW}></input><div className="nextInput">(영문소문자/숫자, 4~16자)</div></td>
                            </tr> */}
                            <tr>
                                <th>이름</th>
                                <td><input type="text" name="name" value={user.name} onChange={handleInput}></input></td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td><input type="text" name="address" value={user.address} onChange={handleInput}></input></td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td><input type="text" name="phone" value={user.phone} onChange={handleInput}></input></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td><input type="text" name="email" value={user.email} onChange={handleInput}></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="signupBtn">
                        <Button variant="dark" onClick={putUser}>정보 수정하기</Button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default MyPage;