import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>Moon Shop</h3>
            <ul>
                <Link to='Home'>
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