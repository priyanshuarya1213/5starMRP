import React from 'react'

export default function FormInput({name, label, placeholder, ...rest}) {
  return (
    <div className='flex flex-col-reverse'>
            <input
            id={name}
            name={name}
            className='bg-transparent rounded border-2 dark:border-gray-500 
            border-gray-400 w-full text-lg 
            outline-none dark:focus:border-white focus:border-primary p-1
             dark:text-white  peer transition' 
              placeholder={placeholder}
              {...rest}
              />
            <label className='font-semibold dark:text-gray-400 text-gray-500
             dark:peer-focus:text-white peer-focus:text-primary transition self-start' 
            htmlFor={name}>
                {label}
            </label>
          </div>
  )
}
