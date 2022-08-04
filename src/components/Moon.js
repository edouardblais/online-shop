import React from "react";
import { useParams } from "react-router-dom";
import Data from './Data'

const Moon = ({addAcres, 
               addToCart,
               numberWithSep,
            }) => {
    let { name } = useParams();
    const moondata = Data.filter(moon => (moon.name === name));

    return (
        <div className="bg-black text-white flex flex-col justify-center flex-grow h-screen">
            <div>{name}</div>
            <div>$ {numberWithSep(moondata[0].price)} per acre</div>
            <img alt="" src={moondata[0].image} className="aspect-auto max-w-lg"></img>
            <form method="post" action="">
                <label>Number of acres desired:</label>
                <input className='text-black' type='text' name={moondata[0].name} onChange={(e) => addAcres(e, moondata[0])}></input>
            </form>
            <button type='button' onClick={() => addToCart(moondata[0])}>Add to Cart</button>
        </div>
    )
}

export default Moon