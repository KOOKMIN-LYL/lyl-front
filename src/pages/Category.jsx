import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination'
import { Link } from 'react-router-dom';
import Api from 'api/API';
import 'style/Category.css';

const Category = ({ match }) => {
    const [productList, setProductList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [startPage, setStartPage] = useState(1);
    const [finPage, setFinPage] = useState(5);
    const [checkFirst, setCheckFirst] = useState(false);
    const [checkLast, setCheckLast] = useState(false);

    let items = [];

    for (let number = startPage; number <= finPage; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => {
                setCurrentPage(number);
                window.scrollTo(0, 0);
            }
            }>
                {number}
            </Pagination.Item>,
        );
    }

    const numberFormat = (inputNumber) => {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const makeProduct = productList.map((product) => {
        return (
            <Link to={`/product/${product.productNumber}`} className="productLink" key={product.productNumber}>
                <li className="box">
                    <img src={product.imagePath} width="292px" height="310px" alt=""></img>
                    <div className="about">
                        <p className="name">{product.name}</p>
                        <p className="price">{numberFormat(product.price)} won</p>
                    </div>
                </li>
            </Link>
        )
    })

    const firstPage = () => {
        if (checkFirst === true) {
            alert("첫번째 페이지 입니다.");
        }
        else {
            window.scrollTo(0, 0);
            setStartPage(1);
            if (totalPages < 5) {
                setFinPage(totalPages);
            }
            else {
                setFinPage(5);
            }
            setCurrentPage(1);
        }
    }

    const lastPage = () => {
        if (checkLast === true) {
            alert('마지막 페이지입니다.');
        }
        else {
            window.scrollTo(0, 0);
            setStartPage(totalPages - (totalPages % 5) + 1);
            setFinPage(totalPages);
            setCurrentPage(totalPages);
        }
    }

    const nextPage = () => {
        if (startPage + 5 > totalPages) {
            alert("마지막 페이지 입니다.");
        }

        else {
            window.scrollTo(0, 0);
            setStartPage(startPage + 5);
            setCurrentPage(startPage + 5);

            if (finPage + 5 > totalPages) {
                setFinPage(totalPages);
            }

            else {
                setFinPage(finPage + 5);
            }
        }
    }

    const prevPage = () => {
        if (startPage - 5 < 1) {
            alert("첫번째 페이지 입니다.");
        }

        else {
            window.scrollTo(0, 0);
            setStartPage(startPage - 5);
            setFinPage(finPage - 5);
            setCurrentPage(startPage - 5);
        }
    }

    useEffect(() => {
        const getCategoryItems = async () => {
            await Api
                .getCategoryItems(match.params.id, currentPage - 1, 12)
                .then((res) => {
                    setProductList(res.data.content)
                    setTotalPages(res.data.totalPages)
                    setCheckFirst(res.data.first)
                    setCheckLast(res.data.last)
                    if (res.data.totalPages < 5) {
                        setFinPage(totalPages);
                    }
                });
        };

        getCategoryItems();
    }, [match.params.id, currentPage, totalPages])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>
            {/* <div className="order">
                정렬
            </div> */}
            <div className="productsContainer">
                <ul className="gird4">
                    {makeProduct}
                </ul>
            </div>
            <Pagination>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev onClick={prevPage} />
                {items}
                <Pagination.Next onClick={nextPage} />
                <Pagination.Last onClick={lastPage} />
            </Pagination>
        </>
    );
};
export default Category;