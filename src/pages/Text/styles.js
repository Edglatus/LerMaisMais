import styled from 'styled-components';

export const ButtonCapsule = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    grid-template-columns: repeat(auto-fit, minmax(40%, 50%));
`;

export const ChoiceButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    font-size: 28px;

    min-width: 150px;
    padding: 5px 10px;

    border: 1px solid #555;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7); 
    transition: .2s; 

    :hover{
        transform: scale(1.02);
        box-shadow: 10px 10px rgba(0, 0, 0, 0.6);
        cursor:pointer;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    margin: 0;

    
    background-color: '#000';
    border: '2px solid #555';
    border-radius: '10px';
    width: 70%;
    height: 70%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.6);
    
    img { 
        max-height: 90%;
        max-width: 90%;
    }
`;

export const ModalStyle = {
    
    overlay: {        
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: { 
        backgroundColor: '#000',
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',

        width: '90%',
        height: 'auto',
        maxWidth: '600px',
        maxHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '10px 10px rgba(0, 0, 0, 0.6)',
    },

};
