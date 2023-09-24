import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
            <NavLink to="signin">Sign In</NavLink>
        </nav>
        </div>
    )
}