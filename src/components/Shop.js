import React from "react";
import Data from './Data';
import { Link } from "react-router-dom";

const Shop = ({addToCart, addAcres}) => {

    return (
        <div className="bg-black text-white flex flex-col justify-center flex-grow">
            <div className="flex flex-row gap-6 flex-wrap">
                {Data?.map((mooninfo) => {
                    return ( <div key={mooninfo.name}>
                                <div>{mooninfo.name}</div>
                                <div>Price per acre: {mooninfo.price}$</div>
                                <img alt='' src={mooninfo.image} className="aspect-auto max-w-lg"></img>
                                <Link to={mooninfo.name}>See Info</Link >
                                <form method="post" action="">
                                    <label>How many acres do you wish to purchase?</label>
                                    <input className='text-black' type='text' name={mooninfo.name} onChange={(e) => addAcres(e, mooninfo)}></input>
                                </form>
                                <button type='button' onClick={() => addToCart(mooninfo)}>Add to Cart</button>
                            </div> 
                    )
                })}
            </div>
        </div>
    )
}

export default Shop