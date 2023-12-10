import './App.css';
import Draggable from 'react-draggable';

function App() {
  const onPlayAudio = (index) => {
    const audio = new Audio(`./audio/audio${index}.mp3`);
    audio.play();
  }
  return (
    <div className="App">
      <div className="main">
        <div className="music-image">
          <img src="./images/music.png" alt="" />
        </div>
        <div className='card-wrapper'>
          {Array(16).fill(0).map((e, index) => {
            return <Draggable key={index} allowAnyClick={true}>
              <div className="box" onClick={() => onPlayAudio(index + 1)}>
                <img src={`./images/kid${index + 1}.png`} alt="" />
              </div>
            </Draggable>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
