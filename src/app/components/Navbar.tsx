"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white sticky top-0 z-50">
            {/* Desktop Navbar */}
            <nav className="hidden md:flex justify-center items-center h-[66px] gap-x-8 text-[#726E8D] text-[16px]">
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/">
                    Home
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/products">
                    All Products
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/about-us">
                    About Us
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/#ceramic">
                    Ceramics
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/Tables">
                    Tables
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/chairs">
                    Chairs
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/tableware">
                    Tableware
                </a>
                <a className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" href="/cutlery">
                    Cutlery
                </a>
            </nav>

            {/* Mobile Navbar */}
            <div className="md:hidden flex items-center justify-between px-4 h-[66px] bg-white">
                <h1 className="text-[#22202E] text-2xl font-semibold clashDisplay md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <a href="/">Avion</a>
                </h1>
                <div className='flex space-x-2'>
                    <div className="flex text-xl gap-[10px] items-center">
                        <a href="/carts" className="justify-center items-center">
                            <Image src={'/cart.png'} alt='icon' width={20} height={20} />
                        </a>

                        <a href="/carts" className="justify-center items-center">
                            <Image src="/avatar.png" alt="" width={20} height={20} />
                        </a>
                    </div>
                    <button
                        className="text-[#726E8D] focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white flex flex-col items-start px-4 transition-transform duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                    }`}
            >
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/"
                >
                    Home
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/products"
                >
                    All Products
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/about-us"
                >
                    About Us
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/#ceramic"
                >
                    Ceramics
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/Tables"
                >
                    Tables
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/chairs"
                >
                    Chairs
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/tableware"
                >
                    Tableware
                </a>
                <a
                    className="block py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c]"
                    href="/cutlery"
                >
                    Cutlery
                </a>
            </div>
        </header>
    );
};

export default Navbar;
