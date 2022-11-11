import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    margin-top: 2.5rem;
    margin-bottom: 15rem;

    @media screen and (min-width: 200px) and (max-width: 640px) {
        flex-direction: column;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2.5rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;
`

export const CoffeesSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

export const CoffeeSelectedEmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    font-weight: bold;

    color: ${(props) => props.theme['base-text']};

    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }
`

export const TitleCheckout = styled.p`
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
`

const INFO_CONTAINER_COLORS = {
    'yellow-dark': 'yellow-dark',
    purple: 'purple',
}

interface InfoContainerProps {
    colorIcon: keyof typeof INFO_CONTAINER_COLORS
}

export const InfoContainer = styled.div<InfoContainerProps>`
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
        color: ${(props) => props.theme[props.colorIcon]};
    }

    div p:first-child {
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
    }

    div p:last-child {
        font-size: 0.875rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-text']};
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputGroup = styled.div`
    display: flex;
    gap: 0.75rem;

    @media screen and (min-width: 200px) and (max-width: 640px) {
        flex-direction: column;
    }
`

export const InputForm = styled.input`
    padding: 0.75rem;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    width: ${(props) => {
        if (props.width) {
            return `${props.width}rem`
        } else {
            return '100%'
        }
    }};

    @media screen and (min-width: 200px) and (max-width: 640px) {
        width: 100%;
    }
`

export const CheckboxContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    input[type='radio'] {
        display: none;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        min-width: 10.625rem;

        padding: 1rem;

        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};

        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 6px;

        font-size: 0.75rem;
        line-height: 160%;

        svg {
            color: ${(props) => props.theme.purple};
        }

        &:hover {
            background: ${(props) => props.theme['base-hover']};
        }
    }

    input[type='radio']:checked + span {
        border: 1px solid ${(props) => props.theme.purple};
    }

    @media screen and (min-width: 200px) and (max-width: 640px) {
        flex-direction: column;
    }
`

export const PriceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-top: 3rem;
`

export const BasePriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TextPriceContainer = styled(BasePriceContainer)`
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
`

export const TotalPriceContainer = styled(BasePriceContainer)`
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
`

export const ButtonConfirm = styled.button`
    margin-top: 1.5rem;

    border: none;
    border-radius: 6px;

    padding: 0.75rem 0.5rem;

    width: 23rem;
    background: ${(props) => props.theme.yellow};

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;

    color: ${(props) => props.theme.white};
    font-stretch: 100;

    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
        cursor: not-allowed;
    }

    @media screen and (min-width: 200px) and (max-width: 640px) {
        width: 100%;
    }
`
