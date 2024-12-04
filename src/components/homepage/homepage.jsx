import React from 'react'
import { useSelector } from 'react-redux';
import AlbumItem from './album-item';

const Homepage = ({allAlbums}) => {
  const albums = allAlbums
  const currentUser = useSelector((state) => state.user.currentUser);


  const renderAlbums = () => {
    return Object.keys(albums).map((key, index) => (
      <AlbumItem index={index} albumData={albums[key]}/>
    ));
  };
  

  return (
    <div className='h-full bg-neutral-900 rounded-lg mr-2 sm:p-2 sm:pt-4 z-0 overflow-clip'>
        <div name="card" className='h-full mx-3 overflow-y-scroll your-playlist-scroll'>
            <div name="title" className='font-bold text-neutral-200 text-2xl'>
                  Made for {currentUser.data.name}
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:pt-4">
              {/* loop starts here */}
              {albums && Object.keys(albums).length > 0 ? (
                renderAlbums()
              ) : (
                <p className="text-gray-500 text-center">No albums found.</p>
              )}

          </div>
        </div>
    </div>
  );
};

export default Homepage