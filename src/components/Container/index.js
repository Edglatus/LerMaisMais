import styled, {css} from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: auto;
    
    max-width: 800px;
    ${ props => props.unlimited && 
        css`
            max-width: 1600px;
    `}
    margin: 2vh auto;
`;
