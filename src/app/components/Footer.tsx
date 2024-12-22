import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-full md:h-[380px] mx-auto bg-[#2A254B] text-white md:pt-10 pt-8 gap-5">
            <div className="flex flex-col md:flex-row md:justify-center max-w-[1280px] mx-auto px-5">
                <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 md:pl-0 md:mb-0 mb-5">
                    <div>
                        <h3 className="font-semibold mb-3">Categories</h3>
                        <ul className="space-y-2 satoshi text-[14px]">
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/crockery">
                                    Crockery
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/furniture">
                                    Furniture
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/homeware">
                                    Homeware
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/plant-pots">
                                    Plant pots
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/chairs">
                                    Chairs
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/crockery">
                                    Crockery
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Menu</h3>
                        <ul className="space-y-2 satoshi text-[14px]">
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/new-arrivals">
                                    New arrivals
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/best-sellers">
                                    Best sellers
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/recently-viewed">
                                    Recently viewed
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/popular-this-week">
                                    Popular this week
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/all-products">
                                    All products
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Our company</h3>
                        <ul className="space-y-2 satoshi text-[14px]">
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1" href="/about-us">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1" href="/vacancies">
                                    Vacancies
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1" href="/contact-us">
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]" href="/privacy">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1" href="/returns-policy">
                                    Returns policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h3 className="font-semibold mb-3">Join our mailing list</h3>
                    <div className="flex items-center h-[56px] w-full">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="md:w-[509px] h-[56px] outline-none bg-[#FFFFFF26] pb-1 w-[70%] pl-4"
                        />
                        <button className="text-[#2A254B] w-[30%] md:w-[118px] h-[56px] bg-[#FFFFFF]">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-8 py-5 md:pt-10 flex justify-center md:justify-between items-center max-w-[1280px] mx-auto text-center px-5 xl:px-5">
                <p className="text-sm satoshi justify-self-center md:pr-5">© Copyright 2022 Avion LTD</p>
                <div className="md:flex justify-center space-x-4 text-2xl hidden">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="hover:text-blue-700 transition-all duration-300 cursor-pointer"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                    </svg>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="hover:text-pink-500 transition-all duration-300 cursor-pointer"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.7-9.9 93.9-36.1 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zM225.3 374c-82.1 0-148.6-66.5-148.6-148.6s66.5-148.6 148.6-148.6 148.6 66.5 148.6 148.6-66.5 148.6-148.6 148.6z"></path>
                    </svg>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
