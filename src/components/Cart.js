import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,
               clearCart,
               totalprice, 
               increaseQuantity,
               decreaseQuantity,
               deleteItem,
               numberWithSep,
              }) => {

    return (
        <div className="bg-black flex flex-col items-center grow min-h-screen font-mono pt-12">
            <div className="bg-white text-black flex flex-col gap-4 p-4 max-w-xl min-w-[25%] rounded">
                {cart.length > 0? (
                    <div className="gap-4 flex flex-col"> 
                        {cart?.map((item, index) => (
                            
                            <div key={index} className="flex flex-row gap-4 items-center justify-center border-b border-black p-2">
                                <img alt={item.name} src={item.image} className="aspect-auto max-w-[25%] rounded"></img>
                                <div className="flex flex-col">
                                    <div className="font-bold text-lg">{item.name}</div>
                                    <div className="italic">Moon of {item.planet}</div>
                                </div>
                                <div className="grow"></div>
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="gap-2 flex-row flex">
                                        <button className="rounded-full bg-black text-white p-2" onClick={() => decreaseQuantity(item, index)}>-10</button>
                                        <div className="border-2 border-black p-1 rounded items-center flex">{numberWithSep(item.count)} acres</div>
                                        <button className="rounded-full bg-black text-white p-2" onClick={() => increaseQuantity(item)}>+10</button>
                                    </div>
                                    <button  className="border border-black p-1 rounded flex items-center" onClick={() => deleteItem(item)}>Delete</button>
                                    <div className="text-lg">$ {numberWithSep(item.price*item.count)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                    <div className="text-2xl text-center">
                        Your cart is empty
                    </div> 
                )}
                <div className="flex flex-row gap-2 items-center justify-start">
                    <button className="text-xl rounded bg-black text-white p-1 flex items-center" onClick={clearCart}>Clear Cart</button>
                    <div className="flex grow"></div> 
                    <div className="font-bold text-lg flex items-center">Total: $ {numberWithSep(totalprice)}</div>
                </div>
                <div className="items-center flex flex-row justify-center">
                    <Link to='Checkout' className="text-xl rounded bg-black text-white p-1">Checkout</Link >
                </div>
                <div className="items-center flex flex-row justify-center">
                    <Link to='Shop' className="text-xl rounded bg-black text-white p-1">Back To Shop</Link >
                </div>
            </div>
        </div>
    )
}

export default Cart