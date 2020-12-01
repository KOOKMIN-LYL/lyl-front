import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from 'provider/UserProvider';
import { Login, Signup, Category, Product, Cart, Order, Main, Profile, MyPage, History, HistoryDetail } from 'pages';
import Header from 'components/header/Header'
import Footer from 'components/header/Footer'
import 'style/App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header></Header>
          <div className="content">
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/category/:id' component={Category} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/order/:id' component={Order} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/mypage' component={MyPage} />
            <Route exact path='/history' component={History} />
            <Route exact path='/historyDetail/:id' component={HistoryDetail} />
          </div>
          <Route exact path='/' component={Main} />
          <Footer></Footer>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
