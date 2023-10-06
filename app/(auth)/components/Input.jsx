import React from "react";

const Input = (props) => {
  const { svgIcon,title, type, placeholder, name, value, onChange } = props;
  return (
    <>
      <label className="block">
        <span>{title}:</span>
        <span className="relative mt-1.5 flex">
          <input
            className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            {svgIcon}
          </span>
        </span>
      </label>
    </>
  );
};

export default Input;
