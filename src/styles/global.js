import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, #root {
        min-height: 100vh;
    }

    body {
        background: dodgerblue;
    }

    body, input, button {
        color: #dcdad8;
        font-size: 13px;
        font-family: "Marcellus SC",'fallback', Helvetica, Arial, sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: #dcdad8;
        text-decoration: none;

        :hover {
            color: #dcdad8;
            text-decoration: none;
        }
    }

    a, p {
        font-size: 24px;
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 500ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }

    .logo{
        font-family: 'Londrina Solid', cursive;
    }
`;
