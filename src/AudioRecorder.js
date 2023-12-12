import React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useState } from 'react';
import './recorder.css';

const AudioWrapper = ({ top }) => {
    const [audioDataList, setAudioDataList] = useState([]);
    const recorderControls = useAudioRecorder();
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const newData = [...audioDataList];
        newData.push(url);
        setAudioDataList(newData);
    };
    return (
        <div id="audio-wrapper" style={{ 'top': top }} className="audio-wrapper">
            {audioDataList.map((data, index) => (
                <div key={index} className="content-audio">
                    <audio controls>
                        <source src={data} />
                    </audio>
                    {/* <CloseCircleOutlined
                        onClick={() => {
                            const newData = [...audioDataList];
                            newData.splice(index, 1);
                            setAudioDataList(newData);
                        }}
                        className="icon-close"
                        style={{
                            fontSize: "25px",
                            color: "#DF2E38",
                            cursor: "pointer",
                        }}
                    /> */}
                </div>
            ))}
            <AudioRecorder
                onRecordingComplete={(blob) => addAudioElement(blob)}
                recorderControls={recorderControls}
            />
        </div>
    );
};

export default AudioWrapper;
