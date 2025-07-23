import React from 'react';
const variantClasses = {
  default: "border-gray-300 focus:ring-primaryColor-50",
  danger: "border-red-500 focus:ring-red-500",
};
const Input = ({
        label,
        name,
        type = "text",
        value = "",
        onChange,
        placeholder,
        className = "",
        variant = "default",
    }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea 
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
          className={`w-full border border-primaryColor-50 rounded px-4 py-2 outline-none ${variantClasses[variant]} ${className}`}
        />
      ) : (
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border border-primaryColor-50 rounded px-4 py-2 outline-none ${variantClasses[variant]} ${className}`}
        />
      )}
    </div>
  );
}

export default Input;