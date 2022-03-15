import { green, lightGreen } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import PrevButton from './PrevButton';
import NextButton from './nextButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ClassNames } from '@emotion/react';
import { useState, useEffect } from 'react';
import PlayPauseButton from './PlayPauseButton';



function Controls({ isPlaying, setIsPlaying, audioObj, setNewCurrentTime, currentSongIndex, playPrevSong, playNextSong }) {
  const [someState, setSomeState] = useState(0);

  useEffect(() => {

    var intervalID = setInterval(function () {
      setSomeState(new Date().getMilliseconds());
    }, 1);

  }, [])



  function CurrentTime() {
    let TimeInSecs = audioObj.object.currentTime;
    let TimeInMins = Math.floor(TimeInSecs / 60);
    let TimeInSecsRemainder = TimeInSecs % 60;
    return <p style={{
      padding: "0 5px 0 0", 
      margin: "0 5px 0 0",
    }}>
      {TimeInMins}M:{TimeInSecsRemainder.toFixed(0)}S</p>
  }



  function handleInputChange(e) {
    console.log(e.target.value);
    let currentTime = e.target.value;
    setNewCurrentTime(currentTime);
  }

  return (
    // play button
    // Button || fd
    // stop buttondd
    // next song button
    // previous song button
    // volume slider
    // song progress slider
    // song length


    

    <>
      
      <Box
        width={"100%"}
        display="flex"
      >
        <CurrentTime />
        { console.log('In Current Time',audioObj, new Date().getMilliseconds())}
        {/* <Slider
        
          min={0}
          max={audioObj.object.duration}
          value={audioObj.object.currentTime}
          size="small"
          aria-label="Small"
          onChange={handleInputChange}
        /> */}
        <PrevButton playPrevSong={playPrevSong} />
        <PlayPauseButton
          isCurrentlyPlaying={isPlaying}
          setIsPlaying={setIsPlaying} />
        <NextButton playNextSong={playNextSong} />
      </Box>



    </>
  )
}

export default Controls;