import React from 'react';

const navigation = {
    home: 'Home',
    space: 'Space',
    about: 'About',
    contact: 'Contact'
}
const Navbar = () => {
    return (
        <>
            <header>
                <nav className="flex justify-between items-center mx-auto px-7 py-7">
                    <div className='flex gap-2 justify-center items-center text-2xl font-bold'>
                        <img src='/src/assets/logo.png' />
                        Business <span className='text-primaryColor-50'>Cafe</span>
                    </div>
                    <div className=''>
                        <ul className="flex  space-x-7">
                            {Object.entries(navigation).map(([key, value]) => (
                                <li key={key} className='hover:text-primaryColor-50 cursor-pointer transition-colors'>
                                    <a href={`#${key}`}>{value}</a>

                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
