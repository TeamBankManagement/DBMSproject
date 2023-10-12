import React from 'react'

const TextArea = ({type,title, placeholder, name, value, onChange, icon}) => {
  return (
    <>
    <label className="block">
                  <span>Address</span>
                  <textarea
                    rows={4}
                    className="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                  />
                </label>
    </>
  )
}

export default TextArea