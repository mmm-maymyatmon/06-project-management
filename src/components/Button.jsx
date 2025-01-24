import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button className="px-5 py-3 text-sm font-semibold tracking-wide rounded-lg border bg-stone-700 text-stone-50 hover:bg-stone-800 focus:ring-4 focus:ring-stone-300 focus:outline-none transition duration-300 ease-in-out md:text-base" {...props}>
      {children}
    </button>
  );
};

export default Button;
