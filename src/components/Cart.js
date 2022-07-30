import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,
               clearCart,
               totalprice, 
               increaseQuantity,
               decreaseQuantity,
              }) => {

    return (
        <div className="bg-black text-white flex flex-col items-center flex-grow h-screen">
            <div>
                {cart?.map((item, index) => (
                    
                    <div key={index} className="flex flew-row gap-4">
                        <div>{item.name}</div>
                        <button onClick={() => decreaseQuantity(item, index)}>-10</button>
                        <div>{item.count} acres</div>
                        <button onClick={() => increaseQuantity(item)}>+10</button>
                        <div>{item.price*item.count}$</div>
                    </div>
                ))}
            </div>
            <div>
                <div>Total: {totalprice}$</div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            <Link to='Checkout'>Proceed To Payment</Link >
        </div>
    )
}

export default Cart