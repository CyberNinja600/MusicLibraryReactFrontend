import React from 'react'
import { useSelector } from 'react-redux';

const Homepage = ({allAlbums}) => {
  const albums = allAlbums
  console.log(albums)  
  const currentUser = useSelector((state) => state.user.currentUser);


  const renderAlbums = () => {
    return Object.keys(albums).map((key, index) => (
      <div key={index}>
        <div className=' h-56 w-52 justify-center flex bg-neutral-900 rounded-lg'>
            <div className='justify-center items-center flex flex-col'>
              <img className='pt-1 object-fit h-[184px] w-[184px]' src={albums[key].image_url} alt=""/>
              <div className='truncate w-[90%] text-neutral-300'>
                {albums[key].name}
              </div>
            </div>
        </div>
      </div>
      
    ));
  };
  

  return (
    <div className='h-full bg-neutral-900 rounded-lg mr-2 sm:p-2 sm:pt-4 z-0 overflow-clip'>
        <div name="card" className='h-full mx-3 overflow-y-scroll your-playlist-scroll'>
            <div name="title" className='font-bold text-neutral-200 text-2xl'>
                  Made for {currentUser.data.name}
            </div>
            <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:pt-4">
              {/* loop starts here */}
              {albums && Object.keys(albums).length > 0 ? (
                renderAlbums()
              ) : (
                <p>No albums available.</p>
              )}

          </div>
        </div>
    </div>
  );
};

export default Homepage