import React, { useState, useEffect } from 'react';
import Controls from './Controls';

function Player({ songsInQueue }) {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(songsInQueue[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioObj, setAudioObj] = useState(new Audio(currentSong.location));

    function handleTimeChange(newTime){
      audioObj.currentTime = newTime;
    }

    function changeSongProcedure(){
      console.log(`change song procedure to index ${currentSongIndex}`);
      setCurrentSong(songsInQueue[currentSongIndex]);
      setAudioObj(new Audio(currentSong.location));
    }

    function playNextSong(){
      console.log('next and currentsongindex: ', currentSongIndex);
      if (currentSongIndex === 0) {
        // setCurrentSong(currentSongIndex + 1);
        setCurrentSongIndex(1);
        console.log('index: ', currentSongIndex);
        changeSongProcedure();
      }
    }

    function playPrevSong(){
      // if currSongINdex < 0 return currentSongIndex.length -1;
      if(currentSongIndex === 0){
        setCurrentSongIndex(currentSongIndex.length - 1);
        changeSongProcedure();
      } else {
        setCurrentSongIndex(currentSongIndex - 1);
        changeSongProcedure();
      }
    }

    useEffect(() => {
        // Update the document title using the browser API
        console.log(audioObj);
        isPlaying ? audioObj.play() : audioObj.pause()
      },[audioObj, isPlaying]);

    return (
<>
        <h1>{currentSong.title}</h1>
        <p>{currentSong.artist}</p>
        <img src={currentSong.coverImg} alt={currentSong.title} height="300px" />
        <Controls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        audioObj={audioObj} 
        setNewCurrentTime={handleTimeChange}
        playPrevSong={playPrevSong}
        playNextSong={playNextSong} />
        
        </>
     );
}

export default Player;