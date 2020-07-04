import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { ButtonCapsule, ChoiceButton } from './styles'
import { Container } from '../../components/Container';
import { TextCapsule } from '../../components/TextCapsule';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

let subtitle;

class Text extends Component {


    state = {
        modalIsOpen: true,
        text: this.props.location.state.texto,
        currentParagraph_id: 0,
        paragraphs: [
            {
                id: 0,
                title: "Capítulo 1",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam sem. Curabitur faucibus arcu et posuere facilisis. Nulla pulvinar efficitur sapien, eget pharetra velit vestibulum at. Nam pharetra, nibh sed gravida semper, nunc nulla consectetur nibh, sit amet luctus turpis mauris non nisi. ",
                image: "",
                option: [
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
    componentDidMount() {
        //  Pegar a Estória do LocalStorage
        //  Se não estiver, Pega da API e guarda no LocalStorage
        //  Se não encontrar, Retorna Erro
        // console.log(this.props.location.state.texto);

    }

    openModal() {
        this.setState({ modalIsOpen: true })
    }

    closeModal() {
        // setIsOpen(false);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    //  Handlers
    choiceHandler(choice) {

    }

    render() {
        const { currentParagraph_id, paragraphs } = this.state;
        const currentParagraph = paragraphs.find(p => p.id === currentParagraph_id);
        const options = currentParagraph.option;
        const { text } = this.state;

        return (
            <Container>
                <TextCapsule>
                    <h1>{text.titulo}</h1>
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
                {/* <Modal
                    isOpen={this.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h1>teste modal</h1>
                </Modal> */}

            </Container >
        );
    }
}

export default Text;