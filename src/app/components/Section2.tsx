import React from 'react';

// Sample product data
const products = [
    {
        id: 1,
        name: 'Candy Glaze',
        price: '£250',
        imageUrl: '/candy.webp',
        alt: 'Candy Glaze',
    },
    {
        id: 2,
        name: 'Aurora Vase',
        price: '£125',
        imageUrl: '/aurora.webp',
        alt: 'Aurora Vase',
    },
    {
        id: 3,
        name: 'Velvet Vase',
        price: '£95',
        imageUrl: '/velvet.webp',
        alt: 'Velvet Vase',
    },
    {
        id: 4,
        name: 'Porcelain Bloom',
        price: '£750',
        imageUrl: '/bloom.webp',
        alt: 'Porcelain Bloom',
    },
    {
        id: 5,
        name: 'The Lucy Lamp',
        price: '£399',
        imageUrl: '/lamp1.webp',
        alt: 'The Lucy Lamp',
        hiddenOnXL: true,
    },
    {
        id: 6,
        name: 'The Lucy Lamp',
        price: '£399',
        imageUrl: '/lamp2.webp',
        alt: 'The Lucy Lamp',
        hiddenOnXL: true,
    },
];

const Section2 = () => {
    return (
        <main
            className="flex flex-col items-center justify-center gap-y-2 px-5 md:px-0 h-fit xl:px-0"
            id="ceramic"
        >
            <h1 className="clashDisplay md:text-[2rem] text-[20px] font-[400px] self-start md:self-center xl:self-start mb-3 md:mt-10 lg:mt-0">
                New ceramics
            </h1>
            <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 xl:gap-x-5 gap-5">
                {products.map((product) => (
                    <a
                        key={product.id}
                        href={`/products/${product.id}`}
                        className={`${product.hiddenOnXL ? 'xl:hidden hidden md:flex' : ''
                            }`}
                    >
                        <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
                            <img
                                alt={product.alt}
                                loading="lazy"
                                width="305"
                                height="375"
                                decoding="async"
                                src={product.imageUrl}
                                className="md:w-auto h-auto"
                                style={{ color: 'transparent' }}
                            />
                            <div>
                                <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                                    {product.name}
                                </p>
                                <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
};

export default Section2;
