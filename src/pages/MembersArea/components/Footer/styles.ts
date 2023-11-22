import styled from "styled-components";

export const ContainerFooter = styled.footer`
    height: 21.7444rem;
    background: #141414;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Information = styled.div`
    height: 5.375rem;
    background: #141414;
    margin: 4.4375rem 3.125rem 1.25rem 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Brand = styled.div`
    color: #fff;
    gap: 1rem;
    margin-right: 6.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterDivBase = styled.div`
    margin-right: 6.25rem;
    color: #fff;
    p{
        margin-bottom: 1.25rem;
    }
    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;

        a{
            color: #fff;
            text-decoration: none;
        }
    }
`

export const Institutional = styled(FooterDivBase)``

export const Help = styled(FooterDivBase)``

export const Social = styled.div`
    color: #fff;
    p{
        margin-bottom: 1.25rem;
    }
    div{
        svg{
            margin-right: 0.3125rem;
        }
    }
`