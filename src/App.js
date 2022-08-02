import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import Moon from './components/Moon'
import Checkout from './components/Checkout'

const App = () => {

    const [cart, setCart] = useState([]);

    const [totalprice, setTotalprice] = useState(0);

    const addToCart = (mooninfo) => {
        if ([...cart].includes(mooninfo)) {
            return
        } else {
            setCart(prevState => [...prevState, mooninfo]);
        }
    }

    const addAcres = (e, mooninfo) => {
        if(Number(e.target.value) >= 0) {
            mooninfo.count = e.target.value;
            setTotalprice(totalprice+(mooninfo.count*mooninfo.price));
        } else {
            throw new Error('Please enter a number higher than 0');
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        const pricesXacres = [...cart].map((moon) => moon.count*moon.price);
        const newtotalprice = pricesXacres.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        setTotalprice(newtotalprice);

    }, [cart, totalprice])

    const increaseQuantity = (item) => {
        item.count += 10;
        setTotalprice(totalprice+(10*item.price));
    }

    const decreaseQuantity = (item, index) => {
        if (totalprice === 0) {
            return
        } else {
            item.count -= 10;
            setTotalprice(totalprice-(10*item.price));
            if (item.count <= 0) {
                const newcart = [...cart.slice(0, index), ...cart.slice(index +1)];
                setCart(newcart);
            }
        }
    }

  return (
        <BrowserRouter>
            <Nav cart={cart}/>
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/Shop' element={<Shop addToCart={addToCart} addAcres={addAcres}/>} />
                        <Route path='/Shop/:name' element={<Moon addToCart={addToCart} addAcres={addAcres}/>} />
                    <Route path='/Cart' element={<Cart cart={cart} clearCart={clearCart} totalprice={totalprice} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>} />
                        <Route path='/Cart/Checkout' element={<Checkout/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
