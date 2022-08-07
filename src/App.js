import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Moon from './components/Moon';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

const App = () => {

    const [cart, setCart] = useState([]);

    const [totalprice, setTotalprice] = useState(0);

    const [message, setMessage] = useState('');

    const addToCart = (mooninfo) => {
        if ((![...cart].includes(mooninfo)) && (mooninfo.count>0)) {
            setCart(prevState => [...prevState, mooninfo]);
        } else {
            return
        }
    }

    const addAcres = (e, mooninfo) => {
        if(e.target.value >= 0) {
            setMessage('');
            mooninfo.count = Number(e.target.value);
            setTotalprice(totalprice+(mooninfo.count*mooninfo.price));
        } else {
            setMessage('Please enter a number higher than 0');
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const deleteItem = (itemtodelete) => {
        const cartminusitem = [...cart].filter((item) => item !== itemtodelete)
        setCart([...cartminusitem]);
    }

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

    const numberWithSep = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
    
    useEffect(() => {
        const pricesXacres = [...cart].map((moon) => moon.count*moon.price);
        const newtotalprice = pricesXacres.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        setTotalprice(newtotalprice);

    }, [cart, totalprice])

  return (
        <BrowserRouter>
            <Nav cart={cart}/>
            <Routes>
                <Route path='/online-shop' element={<Home />} />
                    <Route path='/Shop' element={<Shop addToCart={addToCart} addAcres={addAcres} message={message} numberWithSep={numberWithSep}/>} />
                        <Route path='/Shop/:name' element={<Moon addToCart={addToCart} addAcres={addAcres} numberWithSep={numberWithSep}/>} />
                    <Route path='/Cart' element={<Cart cart={cart} clearCart={clearCart} totalprice={totalprice} numberWithSep={numberWithSep} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} deleteItem={deleteItem}/>} />
                        <Route path='/Cart/Checkout' element={<Checkout/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
