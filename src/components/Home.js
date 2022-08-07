import React from "react";
import '../index.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-homeimage bg-cover text-white flex flex-col items-center flex-grow h-screen pt-12 justify-start font-mono gap-6 box-border">
            <div className="text-5xl">The sky isn't the limit anymore</div>
            <div className="text-3xl">Acquire land on any of 10 available moons</div>
            <Link to='Shop' className="text-4xl border-white border-2 rounded p-2 hover:scale-110">Explore now!</Link>
        </div>
    )
}

export default Home