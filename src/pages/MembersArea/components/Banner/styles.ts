import styled from "styled-components";

export const ContainerBanner = styled.div`
    width: 100vw;
    margin-bottom: -10px;
    div{
        position: absolute;
        top: 30%;
        left: 30%;
        color: #fff;
        span{
            height: 1.25rem;
            width: 6.0819rem;
            margin-bottom: 1.25rem;

            border-radius: 8px;
            padding: 0.1rem 0.5rem 0.1rem 0.5rem;

            background: -webkit-linear-gradient(left, #1bc3ff, #006B91);
            background: -moz-linear-gradient(left, #1bc3ff, #006B91);
            background: -ms-linear-gradient(left, #1bc3ff, #006B91);
            background: -o-linear-gradient(left, #1bc3ff, #006B91);
            background: linear-gradient(to right, #1bc3ff, #006B91);
        }

        h1{
            margin-bottom: 0.625rem;
        }

        p{
            color: #6B6B6B;
            margin-bottom: 2rem;
        }

        button{
            width: 11.2531rem;
            height: 2.8125rem;

            border: 0;
            outline: none;
            border-radius: 8px;

            color: #fff;
            background: -webkit-linear-gradient(left, #1bc3ff, #006B91);
            background: -moz-linear-gradient(left, #1bc3ff, #006B91);
            background: -ms-linear-gradient(left, #1bc3ff, #006B91);
            background: -o-linear-gradient(left, #1bc3ff, #006B91);
            background: linear-gradient(to right, #1bc3ff, #006B91);
        }
    }
`