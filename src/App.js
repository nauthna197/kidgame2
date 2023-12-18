import './App.css';
import Draggable from 'react-draggable';
import AudioWrapper from './AudioRecorder';
import { useState } from 'react';

function App() {
  const [selectedButton, onSelectedButton] = useState("");

  return (
    <div className="App">
      <div className="button-group">
        <button onClick={() => onSelectedButton("1")} className={selectedButton === "1" ? 'active-class' : ''}>Nhóm 1</button>
        <button onClick={() => onSelectedButton("2")} className={selectedButton === "2" ? 'active-class' : ''}>Nhóm 2</button>
      </div>
      <div className='music-title'>Bản nhạc vui nhộn</div>
      <div className="main">
        <div className="music-image">
          <div className="icon-wrapper">
            <img className="left-icon" src="./images/Picture1.png" alt="" />
            <img className="left-icon" src="./images/Picture2.png" alt="" />
            <img className="left-icon" style={{marginBottom: '-45px'}} src="./images/Picture3.png" alt="" />
            <img className="left-icon" src="./images/Picture4.png" alt="" />
          </div>
          <img src="./images/music.png" alt="" />
          <AudioWrapper top='140px' />
          <AudioWrapper top='320px' />
          <AudioWrapper top='470px' />
          <AudioWrapper top='615px' />
        </div>
        <div className='card-wrapper'>
          {Array(16).fill(0).map((e, index) => {
            return <Draggable key={index} allowAnyClick={true}>
              <div className="box">
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
