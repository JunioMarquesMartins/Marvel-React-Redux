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
    body, input, button {
        font-family: 'Roboto', sans-serif;
        background: #E5E5E5;
    }
    #container {
        max-width: 1180px;
        width: 100%;
        margin: 150px auto 50px;
        @media (max-width: 1180px) {
            padding: 15px;
        }
        @media (max-width: 768px) {
            padding: 15px;
            margin-top:10px;
        }
    }
    button {
        cursor: pointer;
    }
`;
