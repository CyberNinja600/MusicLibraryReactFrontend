import React from 'react';

const AlbumItem = ({index,albumData}) => {
    return (
        <div key={index}>
            <div className=' h-56 w-52 justify-center flex hover:bg-neutral-800 rounded-lg'>
                <div className='justify-center items-center flex flex-col'>
                <img className='pt-1 object-fit h-[184px] w-[184px]' src={albumData.image_url} alt=""/>
                <div className='truncate w-[90%] text-neutral-300 antialiased'>
                    {albumData.name}
                </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumItem;