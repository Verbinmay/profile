import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  color: ${myTheme.colors.font};
  line-height: 1.2;
  }

  a {
    text-decoration: unset;
    color: ${myTheme.colors.font};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    color: ${myTheme.colors.font};
    cursor: pointer;
  }

section {
  padding: 100px 0;
}

  section:nth-of-type(odd) {
    background-color: ${myTheme.colors.primaryBg};

  }

  section:nth-of-type(even) {
    background-color: ${myTheme.colors.secondaryBg};
  }

  h3{  
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  }

  p{
  line-height: 1.4;
  font-weight: 400;
  font-size: 14px;
  }
`;
