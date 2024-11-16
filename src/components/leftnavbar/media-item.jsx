import React from 'react';

const MediaItem = ({img, playlist_name}) => {
    return (
        
        <div className='m-2 flex overflow-auto p-2'>
            <div name="img" className='m-1'>
                <img src={img} alt="" className='min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px]' />
            </div>
            <div className='flex w-full text-start'>
                <div className='ml-2 text-white'>
                    {playlist_name}
                </div>
            </div>
        </div>
    );
};

export default MediaItem;