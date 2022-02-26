import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import prevButton from './componets/PrevButton';

function Player({ songsInQueue }) {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(songsInQueue[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioObj, setAudioObj] = useState(new Audio(currentSong.location));

    useEffect(() => {
        // Update the document title using the browser API
        isPlaying ? audioObj.play() : audioObj.pause()
      },[audioObj, isPlaying]);

    return (
<>
        <h1>{currentSong.title}</h1>
        <p>{currentSong.artist}</p>
        <img src={currentSong.coverImg} alt={currentSong.title} height="300px" />
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
       
        </>
     );
}

export default Player;