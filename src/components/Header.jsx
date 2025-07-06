import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {FaBars , FaTimes} from "react-icons/fa";
    export default function(){
    const [menuOpen, setMenuOpen] = useState(false);

    const navItemStyleD = ({ isActive }) =>
        `relative inline-block text-lg px-2 py-1 cursor-pointer duration-300 hover:animate-pulse
        before:content-[""] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2
        before:border-l-8 before:border-r-8 before:border-t-8 
        before:border-l-transparent before:border-r-transparent before:transition-all before:duration-300
        ${isActive ? "before:border-t-amber-50" : "before:border-t-transparent"}
        hover:before:border-t-amber-50
        `;
    const navItemStyleM = ({ isActive }) =>
        `relative inline-block text-lg px-2 py-1 cursor-pointer duration-300 hover:animate-pulse
        before:content-[""] before:absolute before:top-1/2 before:-left-1 before:-translate-y-1/2 before:-rotate-90
        before:border-l-6 before:border-r-6 before:border-t-6 
        before:border-l-transparent before:border-r-transparent before:transition-all before:duration-300
        ${isActive ? "before:border-t-amber-50" : "before:border-t-transparent"}
        hover:before:border-t-amber-50
        `;

    return (
        <header className="bg-[#D7263D] text-white shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    Limelight
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>

                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex space-x-4">
                    <NavLink to="/" className={navItemStyleD}>Home</NavLink>
                    <NavLink to="/information" className={navItemStyleD}>Information</NavLink>
                    <NavLink to="/products" className={navItemStyleD}>Products</NavLink>
                    <NavLink to="/privacy" className={navItemStyleD}>Privacy</NavLink>
                </nav>
            </div>

            {/* Mobile Menu Items */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-[#D7263D] px-4 pb-4 space-y-2">
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className={navItemStyleM}>Home</NavLink>
                    <NavLink to="/information" onClick={() => setMenuOpen(false)} className={navItemStyleM}>Information</NavLink>
                    <NavLink to="/products" onClick={() => setMenuOpen(false)} className={navItemStyleM}>Products</NavLink>
                    <NavLink to="/privacy-policy" onClick={() => setMenuOpen(false)} className={navItemStyleM}>Privacy</NavLink>
                </div>
            )}
        </header>
    );
}

