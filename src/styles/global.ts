import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-200: #00000029; 
    --gray-300: #7070705A;
    --gray-350: #5252525D; 
    --gray-400: #A5A5A5;
    --gray-500: #969696;
    --gray-700: #292929;
    --gray-800: #1F1F1F; 
    --gray-850: #030202; 
    --gray-900: #000000;

    --white: #FFFFFF;
    --yellow: #FFCE00;
    --red: #CC042A;
    --green: #63BF1F;

    --light: 300;
    --regular: 400;
    --medium: 500;
    --bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-700);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;  
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  p {
    font-size: 1.125rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  small {
    font-size: 0.875rem;
    font-weight: var(--regular);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`