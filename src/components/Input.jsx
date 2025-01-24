import React, { forwardRef } from "react";

const classes = `
  w-full p-2 border rounded-md 
  bg-stone-100 text-stone-700 
  placeholder-stone-400 shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500
  transition-all duration-200 ease-in-out
`;

const labelClasses = `
  text-sm font-medium text-stone-600 
  tracking-wide
`;

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <div className="flex flex-col gap-2 my-4">
      <label className={labelClasses}>{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} rows="4" {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
