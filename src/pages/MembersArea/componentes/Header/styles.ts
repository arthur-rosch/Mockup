import styled from "styled-components";

export const ContainerHeader = styled.header`
    height: 5rem;
    background: #141414;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        margin: 1.5625rem; 
    }
`
export const ContainerButtons = styled.div`
    button{
        margin: 1.5625rem; 

        border: 0;
        outline: none;
        background: transparent;

        svg{
            color: #fff
        }

        &:hover{
            cursor: pointer;
        }
    }
`