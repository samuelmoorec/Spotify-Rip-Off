import React from 'react'
import { Avatar } from '@material-ui/core';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import { green, lightGreen, pink } from '@material-ui/core/colors';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import ArrowLeft from '@mui/icons-material/ArrowLeft';


export default function PrevButton({playPrevSong}) {
  return (
    <Avatar
        onClick={playPrevSong}
        sx={{ bgcolor: pink[500] }}
    >
        {/* <KeyboardDoubleArrowLeftIcon /> */}
        <ArrowLeft />
    </Avatar>

  )
}
