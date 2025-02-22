import React,{useEffect, useCallback, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logoutApi, fetchMyAlbum, fetchAllAlbum } from './../api/redux/apiCalls';

import TopNavigation from './../components/main/top-navigation';
import MainMenu from './../components/main/main-menu'
import MusicPlayerShell from './../components/musicPlayer/music-player-shell'

const HomePage = () => {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.user.currentUser.token);

  const [myAlbums, setMyAlbums] = useState({

  });

  const [allAlbums, setAllAlbums] = useState({

  });


  const fetchUserAlbum = useCallback(async () => {
    try {
      const result = await fetchMyAlbum(dispatch,token);
      if (result.success) {
        setMyAlbums(result.data);
      }
      else{
        console.log(result);
      }

      const result_all = await fetchAllAlbum(dispatch,token);
      if(result_all.success){
        setAllAlbums(result_all.data)
      }
      else{
        console.log(result_all);
      }
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  }, []);

  
  useEffect(() => {
    fetchUserAlbum()
  }, [fetchUserAlbum]);
  

  const handleLogout = () => { 
    logoutApi(dispatch)
  } 

  return (
    <div>

      <div className="bg-black min-h-[667px] h-screen w-screen min-w-[375px]">
          <TopNavigation onclick_function={handleLogout}/>
          <MainMenu myAlbums={myAlbums} allAlbums={allAlbums} className="z-10"/>
          <MusicPlayerShell className="z-20"/>
      </div>
    </div>
  );
};

export default HomePage;
