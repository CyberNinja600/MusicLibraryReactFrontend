import React, { useState, useRef } from 'react';
import FloatingLabel from '../input/floating-label';

const RegistrationForm = () => {

  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputPasswordConfirm = useRef();
  const btnRegister = useRef();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {

      const isEmpty = (value) => value.trim() === '';

      if (isEmpty(formData.email)) {
        inputEmail.current.focus();
      }
      else if (isEmpty(formData.password)) {
        inputPassword.current.focus();
      }
      else if (isEmpty(formData.confirm_password)) {
        inputPasswordConfirm.current.focus();
      }
      else {
        btnRegister.current.focus();
      }
    }
  }


  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='w-auto h-auto lg:w-[471px] lg:h-[753px] p-4 bg-black space-y-4 flex justify-center'>
      <div className='space-y-4 pt-14'>
        <div className='music-library-barcode text-white w-full text-center'>
          MusicLibrary
        </div>

        <FloatingLabel
          input_name="email"
          type="email"
          placeholder="Email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputEmail}
        />

        <FloatingLabel
          input_name="password"
          type="password"
          placeholder="Password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputPassword}
        />

        <FloatingLabel
          input_name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          value={formData.confirm_password}
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputPasswordConfirm}
        />

        <div className='text-neutral-500' name='login'>
          Already have an account? <a href="/login" className='hover:text-cyan-300 text-cyan-500'>Sign In</a>
        </div>

        <div name="register" className="flex justify-center">
          <button
            className='p-4 font-bold border-[1px] focus-within:eborder-cyan-300 text-cyan-500 w-full hover:text-cyan-300'
            onClick={handleSubmit} ref={btnRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
