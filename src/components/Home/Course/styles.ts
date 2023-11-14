import styled from 'styled-components'

export const ContainerCouse = styled.div`
    margin-top: 7.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 3rem; 
        font-weight: bold;
        margin-bottom: 5.5rem;
    }
`

export const Courses = styled.div`
    display: grid;
    grid-gap: 20px; 
    grid-template-columns: repeat(3, 1fr); 
`