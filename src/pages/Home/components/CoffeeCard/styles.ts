import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0 1.5rem;
    padding-bottom: 1.25rem;

    width: 16rem;
    max-height: 19.375rem;

    border-radius: 6px 36px;

    background: ${(props) => props.theme['base-card']};

    img {
        margin-top: -1.25rem;
        margin-bottom: 0.75rem;
    }
`

export const TagCoffee = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    border-radius: 100px;

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 130%;

    margin-bottom: 1rem;
`

export const TagCoffeeContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const TitleCoffee = styled.p`
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
`

export const SubtitleCoffee = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-label']};

    margin-bottom: 2rem;
`

export const BuyContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 1.4375rem;
`

export const ValueContainer = styled.span`
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    span {
        font-size: 0.875rem;
    }
`

export const InputContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    input {
        border: none;

        width: 4.5rem;

        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-title']};
        border-radius: 6px;

        line-height: 130%;
        text-align: center;
    }
`

export const ButtonCart = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    border: none;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};

    border-radius: 6px;

    cursor: pointer;

    &:disabled {
        cursor: not-allowed;

        background: ${(props) => props.theme.purple};
    }
`
