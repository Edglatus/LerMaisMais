import styled from 'styled-components';

export const TextCapsule = styled.div`
    background-color: rgba(0, 0, 0, 0.4);

    border: 2px solid #000;
    border-radius: 20px;

    margin: 10px;

    display: flex;
    flex-direction: column;   
    transition: .2s; 

    box-shadow: 5px 5px rgba(0, 0, 0, 0.4);

    h1 {
        padding: 15px;
        font-size: 40px;
        margin: 0;
    }

    h2 {
        font-size: 30px;
        padding: 20px;
        margin-bottom: 0px;
        background: rgba(0, 0, 0, 0.4);
        border-bottom: 2px solid #000;
        border-radius: 20px;
    }

    h3 {
        font-size: 30px;
        margin-left: 20px;
        margin-bottom: 0px;
    }

    p {
        padding: 20px;

        font-size: 20px;
        text-align: center;
    }

    :hover{
        transform: scale(1.02);
        box-shadow: 10px 10px rgba(0, 0, 0, 0.6);
        cursor:pointer;
    }

`;