import React from 'react'

const TopNavigation = ({onclick_function}) =>{
  return (
    <div name="top_nav" className='bg-neutral-900 h-[6%] flex w-full'>
      <div className='flex flex-1  justify-center items-center min-w-[85%]'>
        <input className='rounded-lg' type="text"/>
      </div>

      <div className='flex flex-1 justify-center items-center bg-red-300'>
        <button className="text-neutral-50" onClick={onclick_function}> Log out </button> 
      </div>
    </div>
  );
};

export default TopNavigation