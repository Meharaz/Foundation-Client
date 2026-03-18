import React from 'react';
import { Link, NavLink } from 'react-router'; // Ensure correct import for your version
import Logo from '../Logo/Logo';

const NavBar = () => {
    // Shared active link style logic
    const activeLink = "text-emerald-600 font-bold border-b-2 border-emerald-500 rounded-none pb-1 bg-transparent";
    const normalLink = "text-gray-600 font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300";

    const navItems = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink></li>
            <li><NavLink to="/About" className={({ isActive }) => isActive ? activeLink : normalLink}>About</NavLink></li>
            <li><NavLink to="/Service" className={({ isActive }) => isActive ? activeLink : normalLink}>Services</NavLink></li>
            <li><NavLink to="/Projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
            <li><NavLink to="/Donation" className={({ isActive }) => isActive ? activeLink : normalLink}>Donation</NavLink></li>
            <li><NavLink to="/Contact" className={({ isActive }) => isActive ? activeLink : normalLink}>Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-100 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="navbar max-w-7xl mx-auto px-4 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-emerald-950">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-2xl bg-white rounded-[25px] w-64 gap-2 border border-gray-50"
                        >
                            {navItems}
                            <hr className="my-2 border-gray-100" />
                            <Link to="/Login" className="btn btn-ghost btn-sm text-emerald-700">Login</Link>
                        </ul>
                    </div>
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <div className="w-32">
                           <Logo />
                        </div>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    {/* Login Link for Desktop */}
                    <Link to="/Login" className="hidden md:flex btn btn-ghost text-emerald-900 font-semibold rounded-full hover:bg-emerald-50 px-6">
                        Login
                    </Link>
                    
                    {/* Primary Action Button */}
                    <Link 
                        to="/Donation" 
                        className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full px-8 shadow-lg shadow-emerald-100 font-bold transition-all hover:scale-105 active:scale-95"
                    >
                        Donate Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;