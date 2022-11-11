import styled from 'styled-components'

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 5rem;
`

export const TitleSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 2.5rem;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;

        color: ${(props) => props.theme['yellow-dark']};
    }

    p {
        font-size: 1.25rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
        font-stretch: 100;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: flex-end;

    gap: 6.375rem;

    @media screen and (min-width: 200px) and (max-width: 640px) {
        img {
            display: none;
        }
    }
`

export const InfoSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;

    position: relative;
    box-sizing: border-box;

    border: solid 1px transparent;

    border-radius: 6px 36px;

    background: ${(props) => props.theme.white};
    background-clip: padding-box;

    &:before {
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -1px;
        position: absolute;
        border-radius: inherit;
        background: linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme.purple}
        );
    }
`

export const OrderInfoContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    span {
        font-weight: 700;
    }
`

const ICON_CONTAINER_COLORS = {
    purple: 'purple',
    yellow: 'yellow',
    'yellow-dark': 'yellow-dark',
}

interface IconContainerProps {
    IconContainerColor: keyof typeof ICON_CONTAINER_COLORS
}

export const IconContainer = styled.div<IconContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    width: 2rem;
    height: 2rem;

    background: ${(props) => props.theme[props.IconContainerColor]};

    border-radius: 100%;

    svg {
        color: ${(props) => props.theme.white};
    }
`
