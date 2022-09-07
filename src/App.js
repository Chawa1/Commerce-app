import React from 'react';

import { Routes, Route } from 'react-router-dom';  /* add dyanamic routing */

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <div>
<Routes>  
<Route path="/" element={<Home />}/>
<Route path="about" element={<About />}/>
<Route path="cart" element={<Cart />}/>
<Route path="login" element={<Login />}/>
<Route path="register" element={<Register />}/>
<Route path="products/:id" element={<Products />}/>  {/* to crate dynamic api for each single product */}
<Route path="product" element={<Product />}/>
</Routes>
    </div>
    );
    }

export default App;
