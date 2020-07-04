import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { ButtonCapsule, ChoiceButton, ImageContainer } from './styles'
import { Container } from '../../components/Container';
import { TextCapsule } from '../../components/TextCapsule';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },

};

Modal.setAppElement('#root');

function Text({ location }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [text, setText] = useState(location.state.texto);
    const [paragraph, setParagraph] = useState(text.paragraphs[0]);


    //  Lifecycle Hooks
    useEffect(() => {
        closeModal();
        //  Pegar a Estória do LocalStorage
        //  Se não estiver, Pega da API e guarda no LocalStorage
        //  Se não encontrar, Retorna Erro
    }, []);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    //  Handlers
    function choiceHandler(choice) {

    }

    return (
        <Container>
            <TextCapsule>
                <h1>{text.title}</h1>
            </TextCapsule>

            <TextCapsule onClick={openModal}>
                <h2>{paragraph.title}</h2>
                <p>
                    {paragraph.content}
                </p>
            </TextCapsule>

            <ButtonCapsule>
                <ChoiceButton onClick={() => choiceHandler(paragraph.option[0])}>
                    {paragraph.option[0].name}
                </ChoiceButton>
                <ChoiceButton onClick={() => choiceHandler(paragraph.option[1])}>
                    {paragraph.option[1].name}
                </ChoiceButton>
            </ButtonCapsule>

            <Link to={'/list'}>Voltar à Lista de Livros</Link>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <ImageContainer><img src={paragraph.image} alt="none" /></ImageContainer>
            </Modal>

        </Container >
    );
}

export default Text;