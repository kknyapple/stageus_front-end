import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    //color: ${props.color ? "white" : "black"}
    //font-family: ${props};
  }
`;

export default GlobalStyle;
