import React from 'react';

const Mission = () => {
  return (
    <>
      <div className=' h-[270px] w-full flex flex-col items-center justify-center text-center text-white mx-auto my-7 px-7'
                      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../src/assets/landing-img.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}

      >
        <h1 className='font-bold text-3xl text-white'><span className='text-primaryColor-50'>Our</span> Mission</h1>
      
      <p>Qui aute nulla commodo tempor ea aliquip incididunt voluptate officia aliquip. Et enim id velit sunt consectetur. Reprehenderit anim proident ex qui elit esse est in cillum proident. Voluptate aute ipsum qui sit deserunt quis elit eiusmod esse qui consectetur.</p>
      
      </div>
    </>
  );
}

export default Mission;
