import React from 'react';
import MediaItem from './media-item';

const albums = [

    {   'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },
    {    'img' : 'https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg',
        'playlist_name' : 'playlist_name',
        'playlist_link' : 'playlist_link'
    },

];



const LeftNavBar = () => {
    return (

        <div className='h-full bg-black p-2 '>
            <div className='search_your_playlist h-[5%] m-3 p-2'>
                <div className='flex flex-col w-auto floating-label-content border-neutral-500 border-[1px] rounded-sm'>
                    <input
                        className='active:text-cyan-300 focus:text-cyan-300 text-white floating-input'
                        placeholder="Search"
                    />
                    <label htmlFor="search" className='py-1 px-1 text-[#6d6d6d] floating-label'>
                        Search
                    </label>
                </div>
            </div>

            <div className='h-[93%]  mt-2 overflow-y-scroll'>
                {albums.map(album => (
                    <MediaItem img={album.img} playlist_name={album.playlist_name}/>
                ))}
            </div>
        </div>
    );
};

export default LeftNavBar;