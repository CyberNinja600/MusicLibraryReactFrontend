import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutApi } from './../api/redux/apiCalls';

import TopNavigation from './../components/main/top-navigation';
import MainMenu from './../components/main/main-menu'
import MusicPlayerShell from './../components/musicPlayer/music-player-shell'



const HomePage = () => {
  
  const dispatch = useDispatch()
  const handleLogout = () => { 
    logoutApi(dispatch)
  } 

  return (
    <div>
      {/* <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={handleLogout}> Log out </button> */}
      <div className="bg-red-300 h-screen w-screen">

          <TopNavigation onclick_function={handleLogout}/>


          <MainMenu/>


          <MusicPlayerShell/>

          
      </div>
    </div>
  );
};

export default HomePage;
