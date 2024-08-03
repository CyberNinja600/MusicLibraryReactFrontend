import React from 'react';
import FloatingLabel from '../input/floating-label';

const RegistrationForm = () => {
  return (
      <div className='w-auto h-auto lg:w-[471px] lg:h-[753px] p-4 bg-black space-y-4 flex justify-center'>
        <div className='space-y-4 pt-14 '>
          <div className='music-library-barcode text-white w-full text-center'>
              MusicLibrary
          </div>

          <FloatingLabel input_name="email" type="email" placeholder="Email" label="Email"/>          
          <FloatingLabel input_name="password" type="password" placeholder="Password" label="Password"/>
          <FloatingLabel input_name="confirm_password" type="password" placeholder="Confirm Password" label="Confirm Password"/>

          <div className='text-neutral-500' name='login'>
              Already have an account? <a href="/login">Sign In</a>
          </div>

          <div name="register" className="flex justify-center ">
              <button className='p-4 font-bold  border-[1px] focus-within:eborder-cyan-300 text-cyan-300 w-full'>
                Register
              </button>
          </div>

        </div>
      </div>
  );
};

export default RegistrationForm;
