import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const navigation = {
    home: 'Home',
    space: 'Space',
    about: 'About',
    contact: 'Contact'
}

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="border-t border-primaryColor-50 w-full"></div>
                
                <footer className='py-8 px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {/* Logo and Description */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center text-2xl font-bold'>
                            <img src='/src/assets/logo.png' alt="Business Cafe Logo" className="h-8 mr-2" />
                            <h1>Business <span className='text-primaryColor-50'>Cafe</span></h1>
                        </div>
                        <p className='text-gray-600'>
                            Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
                        </p>
                        <div className="flex text-primaryColor-50 space-x-4">
                            <FiFacebook size={24} className="hover:text-primaryColor-70 cursor-pointer p-1 border rounded-full" />
                            <FiTwitter size={24} className="hover:text-primaryColor-70 cursor-pointer p-1 border rounded-full" />
                            <FiLinkedin size={24} className="hover:text-primaryColor-70 cursor-pointer p-1 border rounded-full" />
                            <FiInstagram size={24} className="hover:text-primaryColor-70 cursor-pointer p-1 border rounded-full" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h1 className='font-bold text-lg mb-4 underline'>Quick Links</h1>
                        <ul className="space-y-3">
                            {Object.entries(navigation).map(([key, value]) => (
                                <li key={key} className='hover:text-primaryColor-50 cursor-pointer transition-colors'>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-3'>
                        <h1 className='font-bold text-lg mb-4 underline'>Contact Info</h1>
                        <p className='text-gray-600'><span className='font-bold text-gray-800'>Location:</span> Kigali, <span className='text-primaryColor-50'>Rwanda</span></p>
                        <p className='text-gray-600'><span className='font-bold text-gray-800'>Email:</span> businesscafe@info.com</p>
                        <p className='text-gray-600'><span className='font-bold text-gray-800'>Phone:</span> +250783787817</p>
                        <a href='#' className='inline-block underline text-primaryColor-50 hover:text-primaryColor-70 transition-colors'>
                            View Location on GoogleMap
                        </a>
                    </div>
                </footer>
                
                <div className="border-t border-primaryColor-50 w-full"></div>
                <p className='text-center py-6 text-gray-600'>
                    Copyright © 2023 Business Coffee All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;