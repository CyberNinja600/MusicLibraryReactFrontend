import React from 'react';

const MediaItem = () => {
    return (
        
        <div className='bg-blue-300 m-2 flex'>
            <div name="img" className='bg-cyan-300'>
                Img here
            </div>
            <div className='w-full'>
                <div name="song_name" className='bg-purple-300'>
                    Song Name
                </div>
                <div name="artist_name" className='bg-slate-400'>
                    Artists Name
                </div>
            </div>
        </div>
    );
};

export default MediaItem;