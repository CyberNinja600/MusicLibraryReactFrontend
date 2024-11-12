import React from 'react'

const TopNavigation = ({onclick_function}) =>{
  return (
    <div name="top_nav" className='bg-red-500 h-[6%] flex'>
      <div className='flex flex-1  justify-center items-center'>
        
        <div name="logo" className='flex justify-center items-center bg-green-200 w-[20%]'>
            Logo Here           
        </div>
        
        <div name='search' className='grow flex justify-center bg-cyan-200'>
          <input  className=' rounded-lg' type="text"/>
        </div>

        <div name="search" className='bg-red-300 w-[20%] flex justify-center items-center'>
          <button className="text-neutral-50" onClick={onclick_function}> Log out </button> 
        </div>
          
      </div>
    </div>
  );
};

export default TopNavigation