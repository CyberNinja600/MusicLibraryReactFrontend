import React from 'react';
import LeftNavBar from '../leftnavbar/left-nav-bar';

const MainMenu = ({myAlbums, allAlbums}) => {
    return (
        <div name="main_menu" className='h-[84%] flex antialiased '>
            <div name="leftnavbar" className='w-[22%] bg-black '>
                <LeftNavBar myAlbums={myAlbums}/>
            </div>

            <div name="home_page" className='w-[78%] bg-cyan-200'>
                This is home_page
            </div>
      </div>
    );
}

export default MainMenu;
