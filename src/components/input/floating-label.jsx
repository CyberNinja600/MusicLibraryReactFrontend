import React from 'react';

const FloatingLabel = ({ input_name, type, placeholder, label, value, onChange }) => {
  return (
    <div className='flex flex-col w-[382px] floating-label-content border-neutral-500 border-[1px] rounded-sm'>
      <input
        className='active:text-cyan-300 focus:text-cyan-300 text-white floating-input'
        name={input_name}
        type={type}
        placeholder={placeholder}
        id={input_name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={input_name} className='py-1 px-1 text-[#6d6d6d] floating-label'>
        {label}
      </label>
    </div>
  );
};

export default FloatingLabel;
