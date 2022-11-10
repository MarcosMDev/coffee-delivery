import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 23rem;

    padding: 0.5rem 0.25rem;

    background: ${(props) => props.theme['base-card']};

    img {
        width: 4rem;
        height: 4rem;
        margin-right: 1.25rem;
    }

    span {
        line-height: 138%;
        font-weight: 700;

        color: ${(props) => props.theme['base-text']};
    }
`

export const ActionContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    height: 2rem;

    input {
        width: 4.5rem;

        padding: 0.5rem;

        background: ${(props) => props.theme['base-button']};

        border: none;
        border-radius: 6px;

        text-align: center;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem;

        border-radius: 6px;
        border: none;

        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};

        font-size: 0.75rem;
        line-height: 160%;

        cursor: pointer;
    }

    svg {
        color: ${(props) => props.theme.purple};
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    p {
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
    }
`
