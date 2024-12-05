import React from 'react';
import PlaybackStatus from './playback_status';
import PlaybackControll from './playback-controll';
import AccesoriesControl from './accesories-control'


const MusicPlayerShell = () => {
    return (
        <div name="music_player" className='bg-neutral-500 h-[10%] flex'>
            <div name="playback_status" className='bg-red-300'>
                <PlaybackStatus/>
            </div>

            <div name="playback_control" className='bg-blue-300 flex-1'>
                <PlaybackControll/>
            </div>

            <div name="accesories_control" className='bg-green-300'>
                <AccesoriesControl/>
            </div>
        </div>
    );
};


export default MusicPlayerShell;
