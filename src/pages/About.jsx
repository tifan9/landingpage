import React from 'react';
const featuresLeft = [
  { title: 'Creative Space' },
  { title: 'High Speed Wifi' },
  { title: 'Parking Area' },
];

const featuresRight = [
  { title: '24/7 Access' },
  { title: 'Great Location' },
  { title: 'Outdoor Space' },
];

const FeatureCard = ({ title }) => (
  <div className="bg-teal-50 p-7 rounded-sm shadow-md flex flex-col items-center text-center">
    <div className="bg-primaryColor-50 text-white p-3 rounded-full mb-4">
      {/* Placeholder icon */}
        <img src='../src/assets/stack-965.png'/>
    </div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
);
const About = () => {
  return (
    <>
      <div id="about" className="flex flex-col lg:flex-row items-center justify-center px-7 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start flex-1">
          <h1 className="text-primaryColor-50 text-md">About Us</h1>
          <h1 className="font-bold py-3 text-3xl lg:text-4xl">
            We offer creative working environments that suit your business.
          </h1>
        </div>

        <div className="hidden lg:block h-32 border-l border-1 border-gray-600 mx-6"></div>

        <div className="flex-1 mt-6 lg:mt-0 text-center lg:text-left">
          <p>
            Veniam laboris officia consequat anim ex cupidatat labore. Officia laboris dolor eiusmod nisi tempor.
            Exercitation consequat laborum nostrud anim tempor veniam cupidatat mollit id minim occaecat non aliquip.
          </p>
          <p className="text-primaryColor-50 py-3 font-semibold cursor-pointer">More About Us</p>
        </div>
      </div>
      <div className="text-center px-4">
        <h1 className="text-primaryColor-50 text-md">Your Benefits</h1>
        <h2 className="font-bold text-3xl py-3">Why Choose Us</h2>
        <p className="pb-8 max-w-2xl mx-auto">
          Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning team today.
        </p>
      </div>
      <div className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="flex flex-col space-y-6">
          {featuresLeft.map((item, index) => (
            <FeatureCard key={index} title={item.title} />
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center h-full">
          <img
            src="https://images.pexels.com/photos/27559523/pexels-photo-27559523.jpeg"
            alt="workspace"
            className="rounded-sm shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col space-y-6">
          {featuresRight.map((item, index) => (
            <FeatureCard key={index} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;