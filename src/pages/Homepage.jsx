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

      <div className="bg-black min-h-[667px] h-screen w-screen min-w-[375px]">

          <TopNavigation onclick_function={handleLogout}/>
          <MainMenu/>
          <MusicPlayerShell/>

      </div>
    </div>
  );
};

export default HomePage;
