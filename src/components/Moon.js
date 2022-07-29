import React from "react";
import { useParams } from "react-router-dom";
import Data from './Data'

const Moon = () => {
    let { name } = useParams();
    const moondata = Data.filter(moon => (moon.name === name));

    return (
        <div className="bg-black text-white flex flex-col justify-center flex-grow h-screen">
            <div>{name}</div>
            <div>Price per acre: {moondata[0].price}</div>
            <img alt="" src={moondata[0].image} className="aspect-auto max-w-lg"></img>
           
        </div>
    )
}

export default Moon