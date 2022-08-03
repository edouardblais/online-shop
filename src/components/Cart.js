import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,
               clearCart,
               totalprice, 
               increaseQuantity,
               decreaseQuantity,
              }) => {

    return (
        <div className="bg-black flex flex-col items-center flex-grow h-screen p-24">
            <div className="bg-white text-black flex flex-col items-center grow gap-4 p-4 max-w-xl">
                <div className="gap-8 flex flex-col"> 
                    {cart?.map((item, index) => (
                        
                        <div key={index} className="flex flex-row gap-4 items-center justify-center border-b border-black p-2">
                            <img alt={item.name} src={item.image} className="aspect-auto max-w-[15%] rounded"></img>
                            <div className="font-bold text-lg">{item.name}</div>
                            <div className="grow"></div>
                            <div className="flex flex-col gap-4 items-center">
                                <div className="gap-2 flex-row flex">
                                    <button className="rounded-full bg-black text-white p-2" onClick={() => decreaseQuantity(item, index)}>-10</button>
                                    <div className="border-2 border-black p-1 rounded">{item.count} acres</div>
                                    <button className="rounded-full bg-black text-white p-2" onClick={() => increaseQuantity(item)}>+10</button>
                                </div>
                                <div className="font-bold text-lg">$ {item.price*item.count}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-2 items-center justify-start">
                    <button className="font-bold text-lg rounded bg-black text-white p-2 " onClick={clearCart}>Clear Cart</button>
                    <div className="grow"></div>
                    <div className="font-bold text-lg">Total: {totalprice}$</div>
                </div>
                <Link to='Checkout' className="font-bold text-lg rounded bg-black text-white p-2">Proceed To Payment</Link >
            </div>
        </div>
    )
}

export default Cart