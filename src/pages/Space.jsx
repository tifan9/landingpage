import React from 'react';
import Product from '../components/cards/Product';

const Space = () => {
    const products = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
            name: "Renting Offices",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
            link: "Learn More"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/8353778/pexels-photo-8353778.jpeg",
            name: "Coffee Shop",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
            link: "Learn More"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/6794925/pexels-photo-6794925.jpeg",
            name: "Private event Space",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
            link: "Learn More"
        },
    ];

    return (
        <>
            <div id="space" className='flex flex-col items-center justify-center text-center px-7 py-12 max-w-4xl mx-auto'>
                <h1 className='text-3xl font-bold text-gray-800 mb-4'>We Offer creative working environment</h1>
                <p className='text-gray-600'>Find your perfect workspace. Choose from versatile options tailored to your needs.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:max-w-6xl mx-auto pb-12'>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        title={product.name}
                        image={product.image}
                        description={product.description}
                        link={product.link}
                    />
                ))}
            </div>
        </>
    );
}

export default Space;