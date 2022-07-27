import React from "react";
import { useParams } from "react-router-dom";
import Data from './Data'

const Moon = () => {
    let { name } = useParams();
    const moondata = Data.filter(moon => (moon.name === name));

    return (
        <div className="bg-black text-white flex flex-column justify-center flex-grow h-screen">
            <div>
                {name}
            </div>
            <img alt="" src={moondata[0].image}></img>
           
        </div>
    )
}

export default Moon