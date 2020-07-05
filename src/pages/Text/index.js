import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';

import SpeechComponent from '../../components/Speech';
import { ButtonCapsule, ChoiceButton, ImageContainer, ModalStyle } from './styles'
import { Container } from '../../components/Container';
import { TextCapsule } from '../../components/TextCapsule';

class Text extends Component {
    state = {
        modalIsOpen: false,
        textID: this.props.location.state.textID,
        textTitle: this.props.location.state.textTitle,
        text: {},
        currentParagraph_id: 0,
        paragraphs: [],
        loading: true
    }

    
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
        {
            if(this.state.paragraphs[0].image)
                this.switchModal();
            this.setState({loading: false});
        }
        else   
            console.log("Deu ruim");
        }
        
        
    //  Handlers
    choiceHandler(choice) {
        const nextParagraphId = choice.id_paragraph;
        const nextParagraph = this.state.paragraphs.find(p => p.id === nextParagraphId);
        
        if(nextParagraph)
        { 
            if(nextParagraph.image.length > 0)
                this.switchModal();
            this.setState({ currentParagraph_id: nextParagraphId }); 
        }
    }
    switchModal(e) {
        const switchTo = !this.state.modalIsOpen;
        this.setState({modalIsOpen: switchTo});
    }
    switchModal = this.switchModal.bind(this);
        
    buildTextToSpeech(currentParagraph)
    {
        let tts = '';
        tts += (currentParagraph?.title) ? currentParagraph.title + '. ' : '';
        tts += currentParagraph?.content + '. ';
        tts += currentParagraph?.option?.map(o =>
            {return ( o.name + '. ' )});

        return tts;
    }

    render() {
        const { modalIsOpen, currentParagraph_id, paragraphs } = this.state;
        const currentParagraph = paragraphs?.find(p => p.id === currentParagraph_id);
        const { textTitle } = this.state;
        const textToSpeech = this.buildTextToSpeech(currentParagraph);
        
        if (this.state.loading)
        {
            return(
                <Container>
                    <h1> LOADING </h1>
                </Container>
            );
        }
        
        return (
            <Container className='container'>
                { modalIsOpen &&
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={this.switchModal}
                            style={ModalStyle}
                        >
                            {currentParagraph?.image &&
                            <ImageContainer><img src={currentParagraph?.image} alt="none" />
                            </ImageContainer>}
                        </Modal>
                }

                <TextCapsule>
                    <h2>{ textTitle }</h2>
                </TextCapsule>

                <TextCapsule>
                    { currentParagraph.title && <h2>{currentParagraph?.title}</h2>}
                    <p>
                        {currentParagraph?.content.split("\n").map((i,key) => {
                            return <strong key={i}>{i}<br/> </strong>;
                        })}
                    </p>
                </TextCapsule>

                <ButtonCapsule>
                    {currentParagraph?.option?.map(o =>
                            {return (
                                <ChoiceButton key={currentParagraph.title + o.name}
                                    onClick={() => this.choiceHandler(o)}>
                                    {o?.name}
                                </ChoiceButton>
                            )}
                        )}
                </ButtonCapsule>

                <SpeechComponent message={textToSpeech}/>

                <Link to={'/list'}>Voltar à Lista de Livros</Link>
            </Container >
        );
    }
}

export default Text;