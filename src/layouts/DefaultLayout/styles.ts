import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 90rem;
    height: 100vh;
    margin: 0 7.5rem;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 200px) and (max-width: 640px) {
        margin: 0 1rem;
    }
`
