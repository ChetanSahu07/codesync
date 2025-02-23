import React , {forwardRef , useId } from 'react'

function Input({
    label,
    className = "",
    type = "text",
    placeholder,
    ...props
}, ref ) {

    const id = useId() 
    
  return (
    <div className='text-white  bg-gray-700 py-5 w-58  rounded-md px-4'>
        { label && <label className='font-bold text-gray-300' htmlFor={id} >
            {label}
        </label>
        }
        <input 
        id={id}
        type={type}
        className={`bg-gray-900 outline-none px-1 w-full my-2 h-8 hover:bg-black rounded-md ${className}`}
        ref={ref}
        placeholder={placeholder}
        {...props}
        >
        </input>
    </div>
  )
}

export default forwardRef(Input)
