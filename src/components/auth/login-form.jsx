import React, { useState, useRef } from 'react';
import FloatingLabel from '../input/floating-label';
import { useDispatch } from 'react-redux';
import { login } from '../../api/redux/apiCalls';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const btnLogin = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // console.log('Form email:', email); 

    await login(dispatch, { email, password });
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const isEmpty = (value) => value.trim() === '';
      if (isEmpty(formData.email)) {
        inputEmail.current.focus();
      } else if (isEmpty(formData.password)) {
        inputPassword.current.focus();
      } else {
        btnLogin.current.focus();
      }
    }
  };

  return (
    <div className="w-auto h-auto lg:w-[471px] lg:h-[753px] p-4 bg-black space-y-4 flex justify-center">
      <div className="space-y-4 pt-14 ">
        <div className="music-library-barcode text-white w-full text-center">
          MusicLibrary
        </div>

        <FloatingLabel
          input_name="email"
          type="email"
          placeholder="Email"
          label="Email"
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputEmail}
        />
        <FloatingLabel
          input_name="password"
          type="password"
          placeholder="Password"
          label="Password"
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputPassword}
        />

        <div className="text-neutral-500" name="login">
          New to MusicLibrary?{' '}
          <a href="/register" className="hover:text-cyan-300 text-cyan-500">
            Join Now
          </a>
        </div>

        <div name="register" className="flex justify-center ">
          <button
            className="p-4 font-bold  border-[1px] focus-within:eborder-cyan-300 text-cyan-300 w-full"
            onClick={handleSubmit}
            ref={btnLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
