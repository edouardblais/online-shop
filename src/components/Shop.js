import React from "react";
import Data from './Data';
import { Link } from "react-router-dom";

const Shop = () => {

    return (
        <div className="bg-black text-white flex flex-column justify-center flex-grow">
            <div className="flex flex-row gap-6 flex-wrap">
                {Data?.map((mooninfo) => {
                    return ( <div key={mooninfo.name}>
                                <div>{mooninfo.name}</div>
                                <div>Price: {mooninfo.price}</div>
                                <img alt='' src={mooninfo.image} className="max-w-lg max-h-96"></img>
                                <Link to={mooninfo.name}>See Info</Link >
                                <button>Add to Cart</button>
                            </div> 
                    )
                })}
            </div>
        </div>
    )
}

export default Shop