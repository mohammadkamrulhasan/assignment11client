import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
     
        <div  className="header">
            <nav className="nav">
                <ul>
                    <li>
                    <h1>Home Fix</h1>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                         <Link to="/AboutUs">About Us</Link>
                   </li>
                    <li>
                         <Link to="/Project">Project</Link>
                   </li>
                   <li>
                       <Link to="/Reviews">Reviews</Link>
                   </li>
                   <li>
                       <Link to="/Admin">Admin</Link>
                   </li>
                   <li>
                       <Link to="/contact">Contact</Link>
                   </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                
            </div>
        </div>
    );
};

export default Navbar;