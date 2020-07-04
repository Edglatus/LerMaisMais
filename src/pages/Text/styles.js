import styled from 'styled-components';

export const ButtonCapsule = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
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

    width: 40%;
    padding: 5px 25px;

    border: 1px solid #555;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
`;