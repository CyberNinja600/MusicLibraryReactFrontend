import React from 'react';
import RegistrationForm from '../../components/auth/registration-form';

const RegistrationPage = () => {
  return (
    <div className='bg-neutral-950 h-screen grid place-content-center'>
      <link href='https://fonts.googleapis.com/css?family=Libre Barcode 128 Text' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Battambang' rel='stylesheet'></link>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
