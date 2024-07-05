import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <header>
                <h1>MyWebsite</h1>
                <nav>
{/*                     
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                    <Link to="/">Home</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;