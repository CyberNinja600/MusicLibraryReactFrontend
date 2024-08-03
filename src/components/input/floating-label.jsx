import React from 'react'

function floating_label({input_name, type, placeholder, label}) {
  return (
    <div className='flex flex-col w-[382px] floating-label-content border-neutral-500 border-[1px] rounded-sm '>
        <input className='text-neutral-200 floating-input' name={input_name} type={type} placeholder={placeholder} />
        <label htmlFor={input_name} className='py-1 px-1 text-[#6d6d6d] floating-label '>{label}</label>
  </div>
  )
}

export default floating_label