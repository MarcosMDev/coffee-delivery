import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme['base-button']};

    border-radius: 6px;
`

export const ButtonInput = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    border: none;

    color: ${(props) => props.theme.purple};

    cursor: pointer;

    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-title']};

    svg {
        background: transparent;
        color: ${(props) => props.theme.purple};
    }
`
