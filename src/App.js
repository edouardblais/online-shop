import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import Moon from './components/Moon'

const App = () => {

    const [cart, setCart] = useState([])

    const addToCart = (mooninfo) => {
        setCart(prevState => [...prevState, mooninfo]);
        console.log(cart)
    }

  return (
    <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/Shop' element={<Shop addToCart={addToCart}/>} />
                        <Route path='/Shop/:name' element={<Moon />} />
                    <Route path='/Cart' element={<Cart cart={cart} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
