import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {IoMdVolumeHigh, IoMdPause} from 'react-icons/io';
import { useSpeechSynthesis, speaking, cancel } from 'react-speech-kit';
 
function SpeechComponent({ message }) 
{
    const { speak, speaking, cancel } = useSpeechSynthesis();

    const handleSpeech = (message) =>
    {
        if(speaking)
            cancel();
        else
            speak(message);
    }
    return (
        <SpeechButton>
            <button type='button' onClick={() => handleSpeech({text: message})} >
                {
                    speaking ? <IoMdPause/> : <IoMdVolumeHigh/>
                }
            </button>
        </SpeechButton>
    );
}

const SpeechButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    
    height: 100%;
    
    button {
        font-size: 28px;

        min-width: 60px;
        padding: 5px 10px;
        margin-right: 10px;
        margin-bottom: 10px;

        border: 1px solid #555;
        border-radius: 10px;
        color: #000;
        background-color: rgba(255, 255, 255, 0.7); 
        transition: .2s; 

        :hover{
            transform: scale(1.02);
            box-shadow: 10px 10px rgba(0, 0, 0, 0.6);
            cursor:pointer;
        }
    }
`

export default SpeechComponent;