import React from "react";
import { Link } from 'react-router-dom';
import '../index.css'

const Nav = ({cart}) => {
    return (
        <nav className="flex flex-row text-white bg-black p-3 font-mono">
            <h1 className="text-4xl font-bold">To The Moon</h1>
            <ul className="flex flex-grow flex-row justify-evenly">
                <Link to=''>
                    <li className="text-2xl">Home</li>
                </Link>
                <Link to='Shop'>
                    <li className="text-2xl">Shop</li>
                </Link>
                <Link to='Cart'>
                    <li className="text-2xl">Cart({cart.length})</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav