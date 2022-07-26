import React from "react";
import { Link } from 'react-router-dom';
import '../index.css'

const Nav = () => {
    return (
        <nav className="flex flex-row text-white bg-gray-900">
            <h3 className="text-xl">Moon Shop</h3>
            <ul className="flex flex-grow flex-row justify-evenly">
                <Link to=''>
                    <li>Home</li>
                </Link>
                <Link to='Shop'>
                    <li>Shop</li>
                </Link>
                <Link to='Cart'>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav