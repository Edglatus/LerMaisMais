import styled from 'styled-components';

export const TextCapsule = styled.div`
    background-color: rgba(0, 0, 0, 0.4);

    border: 2px solid #000;
    border-radius: 20px;

    margin: 10px;

    display: flex;
    flex-direction: column;    

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

`;