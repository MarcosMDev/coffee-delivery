import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;

    nav {
        display: flex;
        gap: 0.75rem;
    }
`

export const LocalContainer = styled.div`
    a {
        background: ${(props) => props.theme['purple-light']};
        border-radius: 6px;

        display: flex;
        align-items: center;
        gap: 4px;

        padding: 0.5rem;

        svg {
            color: ${(props) => props.theme.purple};
        }

        text-decoration: none;
        font-size: 0.875rem;
        color: ${(props) => props.theme['purple-dark']};
    }
`

export const CartContainer = styled.div`
    position: relative;

    a {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        border-radius: 6px;

        display: flex;
        align-items: center;

        padding: 0.5rem;
    }
`

export const BadgeContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    right: -8.35px;
    top: -8px;

    width: 1.25rem;
    height: 1.25rem;
    padding: 0.5rem;
    border-radius: 50%;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
`
