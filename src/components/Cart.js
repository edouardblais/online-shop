import React, { useState } from "react";

const Cart = ({cart}) => {

    const [count, setCount] = useState(cart.length);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        if (count === 0) {
            return
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div className="bg-black text-white flex flex-col items-center flex-grow h-screen">
            <div>{count}</div>
            <div>
                {cart?.map((item, index) => (
                    
                    <div key={index}>
                        <div>{item.name}</div>
                        <button onClick={incrementCount}>Add</button>
                        <button onClick={decrementCount}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart