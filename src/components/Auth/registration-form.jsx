import React, { useState, useRef } from 'react';
import FloatingLabel from '../input/floating-label';
import { register } from '../../api/redux/apiCalls';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

  const inputName = useRef();
  const inputUserName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputPasswordConfirm = useRef();
  const btnRegister = useRef();
  const [buttonState, setButtonState] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
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
      else if (isEmpty(formData.name)){
        inputName.current.focus()
      }
      else if (isEmpty(formData.username)){
        inputUserName.current.focus()
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


  const handleSubmit = async (e) => {
    setButtonState(true)
    e.preventDefault();
    const response = await register(formData );

    if (response.success){
      alert("Registration Successful");
      navigate('/login')
    }
    else{
      const errorMessages = Object.values(response.data)
      .flat()
      .join("\n");

      alert(errorMessages)
    }
    setButtonState(false)
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
          input_name="name"
          type="text"
          placeholder="Name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputName}
        />

        <FloatingLabel
          input_name="username"
          type="text"
          placeholder="User Name"
          label="User Name"
          value={formData.username}
          onChange={handleChange}
          onKeyDown={handleEnter}
          reference={inputUserName}
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
            className='w-full p-4 font-bold  border-[1px] border-cyan-300 active:border-cyan-500 hover:border-cyan-400 disabled:border-neutral-500 text-cyan-300 active:text-neutral-100 hover:text-neutral-100 disabled:text-neutral-700  hover:bg-cyan-400  active:bg-cyan-500 disabled:bg-neutral-500'
            onClick={handleSubmit} 
            ref={btnRegister}
            disabled={buttonState}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
