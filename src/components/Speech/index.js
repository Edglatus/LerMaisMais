import React, { Component } from 'react';
import { AiOutlineSound } from 'react-icons/ai';
import Speech from 'react-speech';

import { Container } from './styles';

export default class SpeechComponent extends Component {
    render() {
        return (
            <Container>
                <AiOutlineSound color="lightblue" size={36} />
                <Speech text={this.props.message} ></Speech>
            </Container>
        );
    }
}
