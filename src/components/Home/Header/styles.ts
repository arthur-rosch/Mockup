import styled from "styled-components"

export const ContainerHeader = styled.header`
    height: 3.375rem;
    margin: 2.1875rem 7.5rem 4.4375rem 7.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ContainerNavigation = styled.div`
    a{
        font-size: 1rem;
        color: #1C1C1C;
        margin-right: 3.5rem;
        text-decoration: none;
    }
`
export const ContainerButtons = styled.div``

const ButtonBase = styled.button`
    height: 3rem;
    width: 107px;

    margin-right: 1rem;
    padding: 1rem 1rem;

    font-size: 1rem;

    outline: none;
    border-radius: 8px;
`
export const ButtonLogIn = styled(ButtonBase)`
    border: 1px solid #1C1C1C;

    color: #1C1C1C;
    background: transparent;
`
export const ButtonSingUp = styled(ButtonBase)`
    border: none;
    color: #FFFFFF;
    background: #1C1C1C;
`