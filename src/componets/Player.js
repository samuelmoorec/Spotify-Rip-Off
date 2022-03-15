import React, { useState, useEffect, useReducer } from 'react';
import Controls from './Controls';

function Player({ songsInQueue }) {

  const ACTIONS = {
    PLAY: 'play',
    PAUSE: 'pause',
    NEXT_SONG: 'nextSong',
    PREVIOUS_SONG: 'previousSong',
  }

  function reducer(currentAudioObject, action) {
    switch (action.type) {
      case ACTIONS.PLAY:
        console.log('playing');
        console.log(currentAudioObject);
        // currentAudioObject.object.play();
        break;
      case ACTIONS.PAUSE:
        // currentAudioObject.object.pause();
        break;
      case ACTIONS.NEXT_SONG:
        return action.audioObject;
      case ACTIONS.PREVIOUS_SONG:
        return action.audioObject;
      default:
        return currentAudioObject;
    }
  }

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songsInQueue[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, dispatch] = useReducer(reducer, { object: new Audio(songsInQueue[0].location) });


  function handleTimeChange(newTime) {
    audio.currentTime = newTime;
  }

  // function changeSongProcedure(){
  //   console.log(`change song procedure to index ${currentSongIndex}`);
  //   setCurrentSong(songsInQueue[currentSongIndex]);
  //   setAudioObj(new Audio(currentSong.location));
  // }

  useEffect(() => {
    // Update the document title using the browser API
    if (isPlaying) {
      console.log(`change song procedure to index ${currentSongIndex}`);
      setCurrentSong(songsInQueue[currentSongIndex]);
      dispatch({ type: ACTIONS.PLAY });
    }
  }, [currentSongIndex]);


  function playNextSong() {
    console.log('next and currentsongindex: ', currentSongIndex);
    if (currentSongIndex === 0) {
      // setCurrentSong(currentSongIndex + 1);
      setCurrentSongIndex(currentSongIndex + 1);
      console.log('index: ', currentSongIndex);
      // changeSongProcedure();
    }
  }

  function playPrevSong() {
    // if currSongINdex < 0 return currentSongIndex.length -1;
    if (currentSongIndex === 0) {
      setCurrentSongIndex(currentSongIndex.length - 1);
      // changeSongProcedure();
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
      // changeSongProcedure();
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    isPlaying ?
      dispatch({ type: ACTIONS.PLAY })
      :
      dispatch({ type: ACTIONS.PAUSE })
  }, [audio, isPlaying]);

  return (
    <>
      <h1>{currentSong.title}</h1>
      <p>{currentSong.artist}</p>
      <img src={currentSong.coverImg} alt={currentSong.title} height="300px" />
      <Controls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        audioObj={audio} 
        setNewCurrentTime={handleTimeChange}
        playPrevSong={playPrevSong}
        playNextSong={playNextSong} />

    </>
  );
}

export default Player;