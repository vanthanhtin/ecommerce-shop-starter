import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Error from './pages/Error'
import ScrollToTop from './components/ScrollToTop';
import LoginCard from './pages/Login';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:productId' element={<ProductDetails/>} />
        <Route path='/shop/checkout' element={<Checkout/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginCard/>} />
        <Route path="/*" element={<Error/>} className=' container' />
      </Routes>
      <Footer/>
    </Router>
  </div>;
};

export default App;
