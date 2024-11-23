import React,{useEffect, useCallback, useState} from 'react';
import { useDispatch} from 'react-redux';
import { logoutApi, fetchMyAlbum, fetchAllAlbum } from './../api/redux/apiCalls';

import TopNavigation from './../components/main/top-navigation';
import MainMenu from './../components/main/main-menu'
import MusicPlayerShell from './../components/musicPlayer/music-player-shell'

const HomePage = () => {
  

  // const currentUser = useSelector((state) => state.user.currentUser);

  const [myAlbums, setMyAlbums] = useState({

  });

  const [allAlbums, setAllAlbums] = useState({

  });


  const fetchUserAlbum = useCallback(async () => {
    try {
      const result = await fetchMyAlbum();
      if (result.success) {
        setMyAlbums(result.data);
      }

      const result_all = await fetchAllAlbum();
      if(result_all.success){
        setAllAlbums(result_all.data)
      }

    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  }, []);

  
  useEffect(() => {
    fetchUserAlbum()
  }, [fetchUserAlbum]);
  

  const dispatch = useDispatch()
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
