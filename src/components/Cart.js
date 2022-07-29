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
                        <div>Number of acres in cart: {item.count}</div>
                        <button onClick={() => increaseQuantity(item)}>+10</button>
                        <button onClick={() => decreaseQuantity(item, index)}>-10</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart