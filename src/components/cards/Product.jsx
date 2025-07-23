import React from 'react';

const Product = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white flex flex-col items-center text-center min-w-[300px] h-full rounded-md shadow-sm overflow-hidden">
      <div className="h-70 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col items-center gap-3 flex-grow">
        {/* Title */}
        <h1 className="text-xl font-bold text-primaryColor-50">
          {title}
        </h1>
            <div className="border-t border-primaryColor-50/80 border-2 w-[80px]"></div>
        {/* Description */}
        <p className="text-gray-600 text-sm">
          {description}
        </p>
        {/* Learn More link */}
        <a href="#" className="text-primaryColor-50 font-bold text-sm mt-auto self-center hover:underline">
          {link}
        </a>
      </div>
    </div>
  );
}

export default Product;