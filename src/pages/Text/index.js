import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonCapsule, ChoiceButton } from './styles'
import { Container } from '../../components/Container';
import { TextCapsule } from '../../components/TextCapsule';

class Text extends Component{
    state={
        currentParagraph_id: 0,
        paragraphs: [
            {
                id: 0,
                title: "Capítulo 1",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam sem. Curabitur faucibus arcu et posuere facilisis. Nulla pulvinar efficitur sapien, eget pharetra velit vestibulum at. Nam pharetra, nibh sed gravida semper, nunc nulla consectetur nibh, sit amet luctus turpis mauris non nisi. ",
                image: "",
                option:[
                    {
                        id_paragraph: 5,
                        name: "Correr"
                    },
                    {
                        id_paragraph: 6,
                        name: "Enfrentar"
                    }
                ]
            },
        ]
    }

    //  Lifecycle Hooks
    componentDidMount()
    {
        //  Pegar a Estória do LocalStorage
        //  Se não estiver, Pega da API e guarda no LocalStorage
        //  Se não encontrar, Retorna Erro
    }

    //  Handlers
    choiceHandler(choice)
    {

    }

    render()
    {
        const { currentParagraph_id, paragraphs } = this.state;
        const currentParagraph = paragraphs.find(p => p.id === currentParagraph_id);
        const options = currentParagraph.option;

        return(
            <Container>
                <TextCapsule>
                    <h1>O Nome Do Vento</h1>
                </TextCapsule>

                <TextCapsule>
                    <h2>{currentParagraph.title}</h2>
                    <p>
                        {currentParagraph.content}
                    </p>
                </TextCapsule>

                <ButtonCapsule>
                    <ChoiceButton onClick={() => this.choiceHandler(options[0])}>
                        {options[0].name}
                    </ChoiceButton>
                    <ChoiceButton onClick={() => this.choiceHandler(options[1])}>
                        {options[1].name}
                    </ChoiceButton>
                </ButtonCapsule>

                <Link to={'/list'}>Voltar à Lista de Livros</Link>
            </Container>
        );
    }
}

export default Text;