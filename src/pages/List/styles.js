import styled from 'styled-components'

export const ListWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;

    div {
        min-width: 300px;
        max-width: 500px;
        @media screen and (min-width: 742px){
            max-width: 47%;
        }
    }
`;
