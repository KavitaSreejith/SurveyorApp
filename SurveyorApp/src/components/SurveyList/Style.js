import styled from 'styled-components'

export const StyledList = styled.li`
    list-style: none;
    padding: 1rem;
    margin: 0.5rem auto;
    background: #f5f5f5;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: #f0f0f0;
    }
`

export const StyledListWrapper = styled.ul`
    padding: 0 2rem;
    margin: auto;
    max-width: 860px;
    width: 100%;
`
