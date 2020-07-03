import React, {Component} from 'react';
import reading from '../../assets/reading.svg';

import { Container, Form } from './styles';

export default class Home extends Component{
    state = {
        typedLogin: ''
    };


    submissionHandler()
    {
        console.log('submitted');
    }

    render() {
        const {typedLogin} = this.state;

        return (
            <Container>
                <h1>Ler++</h1>
                <Form onSubmit={this.submissionHandler}>
                <input type="text" placeholder="Insira seu código" value={typedLogin}/>
                <button type="submit">Entrar</button>
                </Form>
                <img className="img" src={reading} alt="Ler++"/> 
            </Container>
        );
    };
}

