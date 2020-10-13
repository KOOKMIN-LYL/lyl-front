import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import Api from 'api/API';
import 'style/Header.css'

const Header = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            await Api
                .getCategory()
                .then((res) => {
                    setCategory(res.data.category)
                });
        };

        getCategory();
    }, [setCategory])

    const makeCategory = category.map((category) => {
        return (
            <Link to="/product" className="headerLink" key={category.id}>{category.name.toUpperCase()}</Link>
        )
    })

    return (
        <>
            <Navbar fixed="top" variant="dark" className="header">
                <Link to="/" className="headerLink"><h1>Logo</h1></Link>
                <Nav className="mr-auto">
                    {makeCategory}
                </Nav>
                <Nav className="myList">
                    <Link to="/login" className="headerLink">LOGIN</Link>
                    <Link to="/signup" className="headerLink">JOIN US</Link>
                    <Link to="/cart" className="headerLink">CART</Link>
                    <Link to="/" className="headerLink">MYPAGE</Link>
                </Nav>
            </Navbar>
        </>
    )
};

export default Header;