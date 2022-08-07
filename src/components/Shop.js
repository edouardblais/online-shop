import React from "react";
import Data from './Data';
import { Link } from "react-router-dom";

const Shop = ({addToCart, 
               addAcres, 
               message,
               numberWithSep,
            }) => {
    return (
        <div className="bg-black flex flex-col items-center flex-grow min-h-screen p-24 font-mono">
            <div className="bg-black text-white flex justify-center flex-col grow gap-4 p-4 max-w-[65%] min-w-[25%] rounded">
                <div className="flex flex-col gap-6 flex-wrap justify-center items-center">
                    {Data?.map((mooninfo) => {
                        return ( <div key={mooninfo.name} className="flex flex-row gap-4">
                                    <div>
                                        <img alt={mooninfo.name} src={mooninfo.image} className="aspect-auto max-w-lg"></img>
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center p-2">
                                        <div className="flex flex-row">
                                            <div className="flex flex-col">
                                                <div className="font-bold text-xl">{mooninfo.name}</div>
                                                <div className="italic">Moon of {mooninfo.planet}</div>
                                            </div>
                                            <div className="grow"></div>
                                            <div className="text-md">$ {numberWithSep(mooninfo.price)} per acre</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <form method="post" action="" className="flex flex-row gap-2">
                                                <label htmlFor={mooninfo.name} className="text-md">Number of acres desired on {mooninfo.name}</label>
                                                <div className="grow"></div>
                                                <input className='text-black max-w-[22%] rounded' type='number' id={mooninfo.name} name={mooninfo.name} onChange={(e) => addAcres(e, mooninfo)}></input>
                                            </form>
                                            <div className="font-bold text-md">{message}</div>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <div className="flex items-center justify-center">
                                                <Link to={mooninfo.name} className="text-xl rounded bg-black text-white p-1 border-white border-2">See Info</Link >
                                            </div>
                                            <div className="grow"></div>
                                            <div className="flex items-center justify-center">
                                                <button className="text-xl rounded bg-black text-white p-1 border-white border-2" type='button' onClick={() => addToCart(mooninfo)}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop