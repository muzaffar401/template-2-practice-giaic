"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Topbar = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    return (
        <header className="max-w-[1440px] mx-auto md:h-[66px] md:px-10 px-5 sticky top-0 md:static backdrop-blur-sm z-20 hidden md:flex">
            <div className="md:border-b-[1px] border-[#0000004f] w-full mx-auto flex h-[66px] justify-between items-center md:pb-2">
                {/* Search Input */}
                {searchVisible && (
                    <div className="absolute top-16 md:top-0 md:left-20 bg-white rounded-md p-2 transition-all duration-300 ease-in-out">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                )}

                {/* Search Icon */}
                <svg
                    onClick={() => setSearchVisible(!searchVisible)}
                    className="text-xl cursor-pointer hidden md:block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                >
                    <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
                </svg>

                {/* Logo */}
                <h1 className="text-[#22202E] text-2xl font-semibold clashDisplay md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <a href="/">Avion</a>
                </h1>

                {/* Right Section */}
                <div className="flex text-xl gap-[10px] items-center">
                    <a href="/carts" className="justify-center items-center hidden md:flex">
                     <Image src={'/cart.png'} alt='icon' width={20} height={20}/>
                    </a>

                    <a href="/carts" className="justify-center items-center hidden md:flex">
                        <Image src="/avatar.png" alt="" width={20} height={20} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
