import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { green, lightGreen } from '@material-ui/core/colors';


export default function PlayPauseButton({ isCurrentlyPlaying, setIsPlaying }) {
    return (
      <Avatar
        onClick={() => setIsPlaying(!isCurrentlyPlaying)}
        style={{
          cursor: 'pointer',
          backgroundColor: green[500],
        }}
      >
        {isCurrentlyPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </Avatar>
    )
  }