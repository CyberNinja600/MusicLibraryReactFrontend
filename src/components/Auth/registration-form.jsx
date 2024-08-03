import React from 'react';

const RegistrationForm = () => {
  return (

      
      <div className='w-auto h-auto lg:w-[471px] lg:h-[753px] p-4 bg-black space-y-4 flex justify-center'>
        <div className='space-y-4 pt-14 '>
          <div className='music-library-barcode text-white w-full text-center'>
              MusicLibrary
          </div>

          <div className='flex flex-col w-[382px] floating-label-content border-neutral-500 border-[1px] rounded-sm '>
            <input className='  text-neutral-200 floating-input' name="email" type="text" placeholder='Email' />
            <label htmlFor="email" className='py-1 px-1 text-[#6d6d6d] floating-label '>Email</label>
          </div>

          <div className='flex flex-col w-[382px] floating-label-content border-neutral-500 border-[1px] rounded-sm'>
            <input className='  text-neutral-200 floating-input' name="password" type="password" placeholder='Password'/>
            <label htmlFor="password" className='py-1 px-1 text-[#6d6d6d] floating-label '>Password</label>
          </div>

          <div className='flex flex-col floating-label-content border-neutral-500 border-[1px] rounded-sm'>
            <input className='  text-neutral-200 floating-input' name="confirm_password" type="password" placeholder='Confirm Password'/>
            <label htmlFor="confirm_password" className='py-1 px-1 text-[#6d6d6d] floating-label '>Confirm password</label>
          </div>

          <div className='text-neutral-500' name='login'>
              Already have an account? Sign In
          </div>

          <div name="register" className="border-cyan-300 border-2 flex justify-center ">
              <button className='p-4 text-cyan-300'>
                Register
              </button>
          </div>

        </div>
      </div>
  );
};

export default RegistrationForm;
