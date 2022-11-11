import styled from 'styled-components'

export const IntroContainer = styled.section`
    display: flex;

    padding: 5.75rem 0;
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;

        ${(props) => props.theme['base-title']}
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 20px;
`

const ITEM_CONTAINER_COLORS = {
    'yellow-dark': 'yellow-dark',
    'base-text': 'base-text',
    yellow: 'yellow',
    purple: 'purple',
}

interface ItemContainerProps {
    itemContainerColor: keyof typeof ITEM_CONTAINER_COLORS
}

export const ItemContainer = styled.div<ItemContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
        display: flex;
        align-items: center;

        padding: 0.5rem;
        border-radius: 100%;

        background: ${(props) => props.theme[props.itemContainerColor]};
        color: ${(props) => props.theme.background};
    }

    p {
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
    }
`

export const CoffeListContainer = styled.section`
    display: flex;
    flex-direction: column;

    padding-top: 2rem;

    h3 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};

        margin-bottom: 3.375rem;
    }
`

export const ListContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 2.5rem;

    margin-bottom: 9.8125rem;
`
