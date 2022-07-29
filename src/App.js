import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import Moon from './components/Moon'

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
        return mooninfo.count = e.target.value;
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        const pricesXacres = [...cart].map((moon) => moon.count*moon.price);
        const newtotalprice = pricesXacres.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        setTotalprice(newtotalprice);

    }, [cart])

    const increaseQuantity = (item) => {
        addToCart(item)
        item.count += 1;
    }

    const decreaseQuantity = (item, index) => {
        if (totalprice === 0) {
            return
        } else {
            const newcart = [...cart.slice(0, index), ...cart.slice(index +1)];
            setCart(newcart);
            item.count -= 1;
        }
    }

  return (
    <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/Shop' element={<Shop addToCart={addToCart} addAcres={addAcres}/>} />
                        <Route path='/Shop/:name' element={<Moon addToCart={addToCart}/>} />
                    <Route path='/Cart' element={<Cart cart={cart} clearCart={clearCart} totalprice={totalprice} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
