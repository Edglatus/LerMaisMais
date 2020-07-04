import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
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

`;
