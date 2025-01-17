// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #121212;
    --text-color: #ffffff;
    --link-color: #1e90ff;
    --border-color: #333333;
    --hover-color: #1f1f1f;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--text-color);
    background-color: var(--hover-color);
    border-radius: 4px;
    padding: 2px 4px;
  }

  input, textarea, button {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.5em;
    border-radius: 4px;
  }

  button:hover {
    background-color: var(--hover-color);
    cursor: pointer;
  }

  ::placeholder {
    color: var(--border-color);
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
