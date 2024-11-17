import React from 'react';

const MediaItem = ({img, playlist_name}) => {
    return (
        
        <div className='flex mb-4 hover:bg-neutral-800 rounded-sm'>
            <div name="img" className='m-1 w-full  flex justify-center sm:block sm:w-auto'>
                <img src={img} alt="" className='min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px]' />
            </div>
            <div className='w-full text-start hidden sm:flex'>
                <div className='ml-2 text-white'>
                    {playlist_name}
                </div>
            </div>
        </div>
    );
};

export default MediaItem;