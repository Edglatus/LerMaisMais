import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    max-width: 700px;
    margin: 80px auto;

    h1 {
        width: 100%;
        text-align: center;
        font-family: "Londrina Solid", 'fallback', 'Arial Narrow', Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        color: #E0EAFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);        
    }

    .img{
        width: 100%;
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    input {
        flex: 1;
        max-height: 80px;
        
        background: #FFF;  
        border: 2px solid #AAA;
        border-radius: 6px;
        padding: 6px 6px ;
        
        text-align: center;
        color: #000;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
    }

    button {
        flex: 1;
        margin-top: 10px;

        background: #FFF;  
        border: 2px solid #AAA;
        border-radius: 6px;
        padding: 6px 6px ;
        
        font-size: 23px;
        text-align: center;
        color: #000;
    }
`


