import React,{useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApi, fetchUser } from './../api/redux/apiCalls';

import TopNavigation from './../components/main/top-navigation';
import MainMenu from './../components/main/main-menu'
import MusicPlayerShell from './../components/musicPlayer/music-player-shell'

const HomePage = () => {
  

  const currentUser = useSelector((state) => state.user.currentUser);

  const fetchUserData = useCallback(async () => {
    await fetchUser(currentUser);
  },[currentUser]);
  
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const dispatch = useDispatch()
  const handleLogout = () => { 
    logoutApi(dispatch)
  } 

  return (
    <div>

      <div className="bg-black min-h-[667px] h-screen w-screen min-w-[375px]">
          <TopNavigation onclick_function={handleLogout}/>
          <MainMenu className="z-10"/>
          <MusicPlayerShell className="z-20"/>
      </div>
    </div>
  );
};

export default HomePage;
