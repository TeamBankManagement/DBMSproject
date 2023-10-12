import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Input = (props) => {
  const { type,title, placeholder, name, value, onChange, icon } = props;
  return (
    <>
      <label className="block">
        <span>{title}</span>
        <span className="relative mt-1.5 flex">
          <input
            x-model="sameBillingAddress"
            className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent  appearance-none "
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <FontAwesomeIcon icon={icon} className="text-base" />
          </span>
        </span>
      </label>
    </>
  );
};

export default Input;
