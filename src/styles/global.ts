import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        
        background-color: ${(props) => props.theme.background};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
