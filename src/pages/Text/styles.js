import styled from 'styled-components';

export const TextCapsule = styled.div`
    background-color: rgba(0, 0, 0, 0.4);

    border: 1px #000;
    border-radius: 20px;

    margin: 10px;
    padding: 10px 20px;

    display: flex;
    flex-direction: column;    

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 30px;
    }

    p {
        padding-top: 15px;

        border-top: 1px solid #000;

        font-size: 20px;
        text-align: center;
    }

`;

export const ButtonCapsule = styled.div`
    margin-top: 20px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ChoiceButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    font-size: 25px;

    min-width: 120px;
    padding: 5px 25px;

    border: 1px solid #555;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.9);
`;