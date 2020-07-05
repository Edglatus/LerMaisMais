import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';

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

Modal.setAppElement('#root')

class Text extends Component {
    state = {
        modalIsOpen: true,
        textID: this.props.location.state.textID,
        textTitle: this.props.location.state.textTitle,
        text: {},
        currentParagraph_id: 0,
        paragraphs: [],
        loading: true
    }

    switchModal = this.switchModal.bind(this);

    //  Lifecycle Hooks
    async componentDidMount() {
        const storedText = await localStorage.getItem(this.state.textTitle);

        if(storedText)
        {
            const parsedText = JSON.parse(storedText)

            this.setState({ 
                text: parsedText, 
                paragraphs: parsedText.paragraphs 
            });
        }
        else
        {            
            const fetchedData = await api.get(`/textos/${this.state.textID}`);

            if(fetchedData)
            {
                const fetchedText = fetchedData.data;

                this.setState({ 
                    text: fetchedText,
                    paragraphs: fetchedText.paragraphs
                });

                localStorage.setItem(this.state.textTitle, JSON.stringify(fetchedText));
            }
        }

        if(this.state.text)
            this.setState({loading: false});
        else   
            console.log("Deu ruim");
    }

    switchModal(e) {
        const switchTo = !this.state.modalIsOpen;
        this.setState({modalIsOpen: switchTo});
    }

    //  Handlers
    choiceHandler(choice) {
        const nextParagraphId = choice.id_paragraph;
        const nextParagraph = this.state.paragraphs.find(p => p.id === nextParagraphId);

        if(nextParagraph)
        { this.setState({ currentParagraph_id: nextParagraphId }); }
    }

    render() {
        const { modalIsOpen, currentParagraph_id, paragraphs } = this.state;
        const currentParagraph = paragraphs?.find(p => p.id === currentParagraph_id);
        const { textTitle } = this.state;

        if (this.state.loading)
        {
            return(
                <Container>
                    <h1> LOADING </h1>
                </Container>
            );
        }
        
        return (
            <Container>
                    <TextCapsule>
                        <h1>{ textTitle }</h1>
                    </TextCapsule>

                    <TextCapsule>
                        { currentParagraph.title && <h2>{currentParagraph?.title}</h2>}
                        <p>
                            {currentParagraph?.content.split("\n").map((i,key) => {
                                return <>{i}<br/> </>;
                            })}
                        </p>
                    </TextCapsule>

                    <ButtonCapsule>
                        {currentParagraph?.option?.map(o =>
                                {return (
                                    <ChoiceButton onClick={() => this.choiceHandler(o)}>
                                        {o?.name}
                                    </ChoiceButton>
                                )}
                            )}
                    </ButtonCapsule>

                    <Link to={'/list'}>Voltar à Lista de Livros</Link>
                    
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={this.switchModal}
                        style={customStyles}
                    >
                        <ImageContainer><img src={currentParagraph?.image} alt="none" /></ImageContainer>
                    </Modal>
            </Container >
        );
    }
}

export default Text;