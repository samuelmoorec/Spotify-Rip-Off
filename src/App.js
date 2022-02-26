import './App.css';
import Player from './componets/Player';

let songs = [{
  title: 'Mr. FEAR',
  artist: 'SIAMÉS',
  coverImg: '/assets/images/cover/mrfear.png',
  location: '/assets/music/mrfear.mp3',
},{
  title: 'Shotgun',
  artist: 'George esra',
  coverImg: '/assets/images/cover/shotgun.jpg',
  location: '/assets/music/shotgun.mp3',
}];

function App() {
  return (
    <Player songsInQueue={songs} />
  );
}

export default App;
