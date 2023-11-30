
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import OrdersPage from './Components/OrdersItemCard/Index'
import Footer from './Footer/Index';
import Header from './Header/Index';
import Search from './Search/Index';
import Register from './BBUser/Register'
import Login from './BBLogin/Login';
import Payment from './Components/Payment/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './AddressPage/Index';
import axios from 'axios';
import Contact from './ContactPage/Index'
import Loading from './Components/Loading/Index'
import Page404 from './404Page/Index'

const Cart = React.lazy(() => import("./CartPage/Index"));
const Address = React.lazy(() => import('./CartPage/Address/Index'));
const Deleverd = React.lazy(() => import("./DeleveredPage/Index"));
const Orders = React.lazy(() => import("./ProductsPage/Index"));
const Home = React.lazy(() => import("./HomePage/Index"));

const App = () => {
  const LoginStatus = useSelector((state) => state.LoginStatus)
  const dispatch = useDispatch()
  const sd123 = (email) => {
    try {
      if (LoginStatus) {
        axios.get(`http://localhost:4000/get-cart-items/${email}`)
          .then((res) => dispatch({ type: "Initial", payload: res.data }))
          .catch((err) => console.log(err))
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    sd123(LoginStatus)
  }, [LoginStatus])
  return (
    <div>
      <Router>
        <Header />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:items" element={<Orders />} />
            <Route path="/carts" element={LoginStatus ? <Cart /> : <>404 page</>} />
            <Route path="/address" element={LoginStatus ? <Index /> : <>404 page</>} />
            <Route path="/deleverd" element={LoginStatus ? <Deleverd /> : <>404 page</>} />
            <Route path="/Search" element={<Search />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<></>} />
            <Route path='/add-new-address' element={LoginStatus ? <Address /> : <Page404 />} />
            <Route path='/payment' element={LoginStatus ? <Payment /> : <>404 page</>} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/*' element={<Page404 />} />
            <Route path='/your-orders' element={LoginStatus ? <OrdersPage /> : <Page404 />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </Router>
    </div>
  )
}

export default App