import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MontSerrat', sans-serif;

    }
    
    html, body{
        orverflow-x: hidden;
    }
    
`;

export default GlobalStyle;
