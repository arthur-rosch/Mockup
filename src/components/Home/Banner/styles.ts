import styled from 'styled-components'

export const ContainerBanner = styled.div`
    height: 41rem;
    margin-left: 7.5rem;
    margin-right: 0.9375rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerInformation = styled.div`
    width: 36.75rem;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;

    h1{
        font-size: 4rem;
        line-height: 4.5rem;
        margin-bottom: 2.5rem;
    }
    p{
        width: 100%;
        line-height: 2rem;
        font-size: 1.125rem;
        margin-bottom: 2.5rem;
    }
`

export const ContainerButtons = styled.div``

const buttonBase = styled.button`
    height: 4rem;
    width: 12.625rem;
    padding: 1.25rem 3rem 1.25rem 3rem;

    font-size: 1.125rem;

    border: 0;
    outline: none;
    border-radius: 8px;

    background: transparent;
`

export const ButtonJoin = styled(buttonBase)`
    color: #ffff;
    background: #1B1AFF;
`

export const ButtonPlans = styled(buttonBase)`
    color: #1C1C1C;
`