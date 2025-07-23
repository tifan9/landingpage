import React from 'react';
import { Button } from '../components/Button';

const Welcome = () => {
    return (
        <>
            <div 
                className='h-[600px] flex flex-col items-center justify-center'
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../src/assets/landing-img.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="w-3/4 max-w-4xl text-white flex flex-col items-center justify-center px-7 py-7 text-center">
                    <h1 className="text-xl">The Best Workplace in Kigali</h1>
                    <h1 className='text-3xl font-bold'>
                        <span className='text-primaryColor-50'>Professional</span>, Creative,
                    </h1>
                    <h1 className='text-3xl font-bold'>
                        Flexible, Scalable <span className='text-primaryColor-50'>Workspace</span>
                    </h1>
                    <p>
                        Discover your idea workspace with us. Work smart, not hard in our fully-equipped office spaces. 
                        Elevate your business with flexible solutions tailored to your needs. Find your perfect office today!
                    </p>
                </div>
                <div>
                    <Button type="submit" label="Explore" className='bg-primaryColor-50 shadow-md hover:bg-primaryColor-50/80 transition' />
                </div>
            </div>
        </>
    );
}

export default Welcome;
