import React from "react";
import { useParams } from "react-router-dom";
import Data from './Data';
import { Link } from "react-router-dom";

const Moon = ({addAcres, 
               addToCart,
               numberWithSep,
            }) => {
    let { name } = useParams();
    const moondata = Data.filter(moon => (moon.name === name));

    return (
        <div className="bg-black flex flex-col items-center flex-grow min-h-screen p-24 font-mono">
            <div className="bg-black text-white flex justify-center items-center grow gap-4 p-4 max-w-[60%] min-w-[25%]">
                <div>
                    <img alt="" src={moondata[0].image} className="aspect-auto max-w-lg"></img>
                </div>
                <div  className="flex flex-col gap-4 justify-center p-2">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <div className="text-xl font-bold">{name}</div>
                            <div className="italic">Moon of {moondata[0].planet}</div>
                        </div>
                        <div className="grow"></div>
                        <div>$ {numberWithSep(moondata[0].price)} per acre</div>
                    </div>
                    <div>{moondata[0].info}</div>
                    <div>
                        <form method="post" action="" className="flex flex-row">
                            <label>Number of acres desired:</label>
                            <div className="grow"></div>
                            <input className='text-black max-w-[22%] rounded' type='text' name={moondata[0].name} onChange={(e) => addAcres(e, moondata[0])}></input>
                        </form>
                    </div>
                    <div className="items-center flex flex-row">
                        <Link to='../Shop' className="text-xl rounded bg-black text-white p-1 border-white border-2 hover:scale-110">Back To Shop</Link >
                        <div className="grow"></div>
                        <button className="text-xl rounded bg-black text-white p-1 border-white border-2 hover:scale-110"  type='button' onClick={() => addToCart(moondata[0])}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moon