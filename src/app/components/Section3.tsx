import React from 'react';

const Section3 = () => {
    return (
        <main className="flex flex-col items-center justify-center gap-y-2 mt-10 px-5 md:px-10 xl:px-0">
            <h1 className="clashDisplay md:text-[2rem] text-[20px] font-[400px] md:self-center self-start mb-3 xl:self-start">
                Our popular products
            </h1>
            <div className="flex gap-5 xl:gap-5">
                <a href="/products/3">
                    <div className="xl:w-[305px] w-full lg:w-[320px] md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
                        <img
                            alt="CHAIR"
                            loading="lazy"
                            width="305"
                            height="375"
                            decoding="async"
                            data-nimg="1"
                            className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
                            src="/velvet.webp"
                            style={{ color: 'transparent' }}
                        />
                        <div>
                            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">The Lucy Lamp</p>
                            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£399</p>
                        </div>
                    </div>
                </a>
                <div className="lg:w-[630px] w-full h-fit xl:h-[462px] bg-white gap-[24px] flex-col hidden xl:flex">
                    <img
                        alt="CHAIR"
                        loading="lazy"
                        width="375"
                        height="630"
                        decoding="async"
                        data-nimg="1"
                        className="md:w-auto h-auto animate-pulse"
                        src="/sofa.webp"
                        style={{ color: 'transparent' }}
                    />
                    <div>
                        <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">The Poplar suede sofa</p>
                        <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£980</p>
                    </div>
                </div>
                <a href="/products/1">
                    <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
                        <img
                            alt="Candy Glaze"
                            loading="lazy"
                            width="305"
                            height="375"
                            decoding="async"
                            data-nimg="1"
                            className="md:w-auto h-auto"
                            src="/candy.webp"
                            style={{ color: 'transparent' }}
                        />
                        <div>
                            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">Candy Glaze</p>
                            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£250</p>
                        </div>
                    </div>
                </a>
                <a href="/products/2">
                    <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
                        <img
                            alt="Aurora Vase"
                            loading="lazy"
                            width="305"
                            height="375"
                            decoding="async"
                            data-nimg="1"
                            className="md:w-auto h-auto"
                            src="/aurora.webp"
                            style={{ color: 'transparent' }}
                        />
                        <div>
                            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">Aurora Vase</p>
                            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£125</p>
                        </div>
                    </div>
                </a>
            </div>
            <a href="/products">
                <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mt-4">
                    View Collections
                </button>
            </a>
        </main>
    );
}

export default Section3;
