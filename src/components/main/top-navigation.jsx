import React from 'react'

const TopNavigation = ({onclick_function}) =>{
  return (
    <div name="top_nav" className='bg-green-300 h-[6%]'>
        <button onClick={onclick_function}> Log out </button> 
    </div>
  );
};

export default TopNavigation