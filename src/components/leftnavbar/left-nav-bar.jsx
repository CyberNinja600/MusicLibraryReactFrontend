import React from 'react';
import MediaItem from './media-item';

const albums = [

    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },
    {    'img' : 'link',
        'artist_name' : 'artist_name',
        'song_name' : 'song_name'
    },

];



const LeftNavBar = () => {
    return (
        <div className='bg-red-300 h-full overflow-scroll'>
            {albums.map(album => (
                <MediaItem />
            ))}
        </div>
    );
};

export default LeftNavBar;