import React, { Component } from 'react';
import Speech from 'react-speech';
 
export default class SpeechComponent extends Component 
{    
    render() 
    {
        return (
            <Speech text={this.props.message} textAsButton displayText='Text'/>
        );
    }
}
