import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import UserContext from 'context/UserContext';
import Api from 'api/API';
import Cookies from 'js-cookie';
import 'style/Header.css'

const Header = () => {
    const [category, setCategory] = useState([]);
    const { setIsLogged } = useContext(UserContext);
    const [update, setUpdate] = useState(false);

    const makeCategory = category.map((category) => {
        return (
            <Link to={`/category/${category.id}`} className="headerLink" key={category.id}>{category.name.toUpperCase()}</Link>
        )
    })

    const logout = () => {
        if (window.confirm("로그아웃하시겠습니까??") === true) {
            Cookies.remove('isLogged');
            Cookies.remove('token');
            setIsLogged(false);
            setUpdate(!update);
        }
    }

    useEffect(() => {
        const getCategory = async () => {
            await Api
                .getCategory()
                .then((res) => {
                    setCategory(res.data.category)
                })
        };

        getCategory();
    }, [setCategory])

    return (
        (Cookies.get('isLogged'))
            ? (
                <Navbar fixed="top" variant="dark" className="header">
                    <Link to="/" className="headerLink"><h1>Logo</h1></Link>
                    <Nav className="mr-auto">
                        {makeCategory}
                    </Nav>
                    <Nav className="myList">
                        <Link to="/cart" className="headerLink">CART</Link>
                        <Link to="/mypage" className="headerLink">MYPAGE</Link>
                        <Link to="/" className="logout" onClick={logout}>LOGOUT</Link>
                    </Nav>
                </Navbar>
            )
            : (
                <Navbar fixed="top" variant="dark" className="header">
                    <Link to="/" className="headerLink"><h1>Logo</h1></Link>
                    <Nav className="mr-auto">
                        {makeCategory}
                    </Nav>
                    <Nav className="myList">
                        <Link to="/login" className="headerLink">LOGIN</Link>
                        <Link to="/signup" className="headerLink">JOIN US</Link>
                    </Nav>
                </Navbar>
            )
    )
};

export default Header;