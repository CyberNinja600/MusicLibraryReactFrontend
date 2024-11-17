import React from 'react';
import MediaItem from './media-item';

const albums = [

    {   'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-1',
        'playlist_link' : 'playlist_link1'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-2',
        'playlist_link' : 'playlist_link2'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-3',
        'playlist_link' : 'playlist_link3'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-4',
        'playlist_link' : 'playlist_link4'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-5',
        'playlist_link' : 'playlist_link5'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-6',
        'playlist_link' : 'playlist_link6'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-7',
        'playlist_link' : 'playlist_link7'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-8',
        'playlist_link' : 'playlist_link8'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-9',
        'playlist_link' : 'playlist_link9'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-10',
        'playlist_link' : 'playlist_link10'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-11',
        'playlist_link' : 'playlist_link11'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-12',
        'playlist_link' : 'playlist_link12'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-13',
        'playlist_link' : 'playlist_link13'
    },
    {    'img' : 'https://lastfm.freetls.fastly.net/i/u/ar0/5e03d7c6d69c19819b07cef436e73413.jpg',
        'playlist_name' : 'Album-14',
        'playlist_link' : 'playlist_link14'
    },

];



const LeftNavBar = () => {
    return (

        <div className='h-full bg-black sm:p-2 z-0 overflow-clip'>
            <div className='search_your_playlist h-[5%] sm:m-3 p-1 mx-1 sm:mx-3 sm:p-2 '>
                <div className='flex flex-col w-auto floating-label-content border-neutral-500 border-[1px] rounded-sm'>
                    <input
                        className='active:text-cyan-300 focus:text-cyan-300 text-white floating-input-your ' 
                        placeholder="Search"
                    />
                    <label htmlFor="search" className='py-1 px-1 text-[#6d6d6d] floating-label-your hidden sm:block '>
                        Search
                    </label>
                </div>
            </div>
            
            <div className='h-[93%] mt-4 sm:mt-0 sm:p-4 overflow-clip '>
                <div className='px-1 my-3 mb-[15px] overflow-y-scroll your-playlist-scroll h-full'>
                    {albums.map((album,index) => (
                        <MediaItem key={index} img={album.img} playlist_name={album.playlist_name}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftNavBar;