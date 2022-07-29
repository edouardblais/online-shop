import React from "react";

const Cart = ({cart,
               clearCart,
               totalprice, 
               increaseQuantity,
               decreaseQuantity,
              }) => {

    return (
        <div className="bg-black text-white flex flex-col items-center flex-grow h-screen">
            <div>Total: {totalprice}$</div>
            <button onClick={clearCart}>Clear Cart</button>
            <div>
                {cart?.map((item, index) => (
                    
                    <div key={index}>
                        <div>{item.name}</div>
                        <div>{item.count}</div>
                        <button onClick={() => increaseQuantity(item)}>+</button>
                        <button onClick={() => decreaseQuantity(item, index)}>-</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart