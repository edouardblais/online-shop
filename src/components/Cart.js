import React, { useState } from "react";

const Cart = ({cart}) => {

    const [count, setCount] = useState(0);

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
        <div className="bg-black text-white flex flex-column justify-center flex-grow h-screen">
            {cart?.map((item, index) => (
                
                <div key={index}>
                    <div>{item.name}</div>
                    <button onClick={incrementCount}>Add</button>
                    <button onClick={decrementCount}>Remove</button>
                </div>
            
        ))}
        </div>
    )
}

export default Cart