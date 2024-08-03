import React from 'react';

const RegistrationForm = () => {
  return (

      
      <div className='w-auto h-auto lg:w-[471px] lg:h-[753px] p-4 alternative-color space-y-4 flex justify-center'>
        <div className='space-y-4 pt-14'>
          <div className='music-library-barcode text-white w-full text-center'>
              MusicLibrary
          </div>

          <div className='flex flex-col w-[382px] '>
            <label htmlFor="email" className='auth-form-label text-[#6d6d6d]'>Email</label>
            <input className='bg-black h-12 p-2 rounded-[10px] ' name="email" type="text" placeholder='Email' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password" className='auth-form-label text-[#6d6d6d]'>Password</label>
            <input className='bg-black h-12 p-2 rounded-[10px]' name="password" type="password" placeholder='Password'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="confirm_password" className='auth-form-label text-[#6d6d6d]'>Confirm password</label>
            <input className='bg-black h-12 p-2 rounded-[10px]' name="confirm_password" type="password" placeholder='Confirm Password'/>
          </div>

        </div>
      </div>
  );
};

export default RegistrationForm;
