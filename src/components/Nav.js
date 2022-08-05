import React from "react";
import { Link } from 'react-router-dom';
import '../index.css'

const Nav = ({cart}) => {
    return (
        <nav className="flex flex-row text-white bg-black p-2">
            <h1 className="text-xl font-bold">To The Moon</h1>
            <ul className="flex flex-grow flex-row justify-evenly">
                <Link to=''>
                    <li className="text-xl font-bold">Home</li>
                </Link>
                <Link to='Shop'>
                    <li className="text-xl font-bold">Shop</li>
                </Link>
                <Link to='Cart'>
                    <li className="text-xl font-bold">Cart({cart.length})</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav