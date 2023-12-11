import './App.css';
import Draggable from 'react-draggable';
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useState } from 'react';

function App() {
  const [audioDataList, setAudioDataList] = useState([]);
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const newData = [...audioDataList];
    newData.push(url);
    setAudioDataList(newData);
  };
  return (
    <div className="App">
      <div className="main">
        <div className="music-image">
          <div className="icon-wrapper">
            <img className="left-icon" src="./images/Picture1.png" alt="" />
            <img className="left-icon" src="./images/Picture2.png" alt="" />
            <img className="left-icon" src="./images/Picture3.png" alt="" />
            <img className="left-icon" src="./images/Picture4.png" alt="" />
          </div>
          <img src="./images/music.png" alt="" />
          <div className="audio-wrapper">
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
          </div>
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
