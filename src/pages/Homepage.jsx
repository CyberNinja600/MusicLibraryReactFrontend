import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutApi } from '../api/redux/apiCalls';
const HomePage = () => {
  
  const dispatch = useDispatch()
  const handleLogout = () => { 
    logoutApi(dispatch)
  } 

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={handleLogout}> Log out </button>
    </div>
  );
};

export default HomePage;
