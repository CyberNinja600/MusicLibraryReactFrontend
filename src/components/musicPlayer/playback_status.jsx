import React from 'react'

function PlaybackStatus() {
  return (
    <div className=' flex h-full p-1'>
      <div className='flex items-center justify-center p-2'>
        <img src="https://res.cloudinary.com/dk0qatnu1/image/upload/v1731767690/album_img/7/zkogna9jsgilf2crsrnx.jpg" alt="" className='pt-1 object-fit h-[60px] w-[60px] rounded-lg'/>
      </div>
      
      <div className='flex flex-col  items-start justify-center p-2 truncate text-neutral-300 antialiased'>
        <div name='song_name'>
          Song name here
        </div>
        <div name='artists'>
          Artists
        </div>
      </div>
    </div>
  )
}

export default PlaybackStatus