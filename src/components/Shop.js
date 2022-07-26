import React from "react";
import Data from './Data';

const Shop = () => {
    return (
        <div className="bg-gray-900 text-white flex flex-column justify-center flex-grow h-screen">
            {Data?.map((mooninfo) => {
                return ( <div key={mooninfo.name}>
                            <div>{mooninfo.name}</div>
                            <img alt='' src={mooninfo.image}></img>
                         </div> 
                )
            })}
        </div>
    )
}

export default Shop