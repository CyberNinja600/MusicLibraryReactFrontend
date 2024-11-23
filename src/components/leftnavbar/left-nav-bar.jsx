import MediaItem from './media-item';


const LeftNavBar = (myAlbums) => {
    const albums = Array.isArray(myAlbums) ? myAlbums : myAlbums.myAlbums || [];
    return (

        <div className='h-full bg-neutral-900 rounded-lg mx-2 sm:p-2 z-0 overflow-clip'>
            <div className='h-[5%] sm:m-3 p-1 mx-1 sm:mx-3 sm:p-2 '>
                <div className='flex flex-col w-auto floating-label-content border-neutral-500 border-[1px] rounded-sm'>
                    <input
                        className='active:text-cyan-300 focus:text-cyan-300 text-white floating-input-your' 
                        placeholder="Search" name="search_as" id="search_as"
                    />
                    <label htmlFor="search_as" className='py-1 px-1 text-[#6d6d6d] floating-label-your hidden sm:block '>
                        Search
                    </label>
                </div>
            </div>
            
            <div className='h-[93%] mt-4 sm:mt-0 sm:p-4 overflow-clip '>
                <div className='px-1 my-3 mb-[15px] overflow-y-scroll your-playlist-scroll h-full'>
                    {albums.length > 0 ? (
                        albums.map((album, index) => (
                            <MediaItem
                                key={index}
                                img={album.image_url}
                                playlist_name={album.name}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No albums found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeftNavBar;