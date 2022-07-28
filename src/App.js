import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import Moon from './components/Moon'

const App = () => {

    const [cart, setCart] = useState([]);

    const [totalcount, setTotalcount] = useState(0);

    const addToCart = (mooninfo) => {
        setCart(prevState => [...prevState, mooninfo]);
        console.log(cart)
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        setTotalcount(cart.length);
    }, [cart])

    const increaseQuantity = (item) => {
        setCart(prevState => [...prevState, item])
    }

    const decreaseQuantity = (index) => {
        if (totalcount === 0) {
            return
        } else {
            const newcart = [...cart.slice(0, index), ...cart.slice(index +1)];
            setCart(newcart);
        }
    }

  return (
    <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/Shop' element={<Shop addToCart={addToCart}/>} />
                        <Route path='/Shop/:name' element={<Moon />} />
                    <Route path='/Cart' element={<Cart cart={cart} clearCart={clearCart} totalcount={totalcount} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
