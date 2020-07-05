import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import reading from '../../assets/reading.svg';

import { Container, Form } from './styles';

class Home extends Component {
    state = {
        typedLogin: ''
    };


    submissionHandler(e) {
        e.preventDefault();
        this.props.history.push('/list');
    }

    render() {
        const { typedLogin } = this.state;

        return (
            <Container>
                <h1 className="logo">Ler++</h1>
                <Form onSubmit={(e) => this.submissionHandler(e)}>
                    <input type="text" placeholder="Insira seu código" value={typedLogin} />
                    <button type="submit">Entrar</button>
                </Form>
                <img className="img" src={reading} alt="Ler++" />
            </Container>
        );
    };
}

export default withRouter(Home);
