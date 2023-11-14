import { ContainerCardCouse } from './styles'

interface CardCouseProps {
    svg: string
    title: string
    description: string
}

export function CardCouse({svg, title, description}: CardCouseProps) {
    return(
        <ContainerCardCouse>
            <img src={svg} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>

            <button>Learn more</button>
        </ContainerCardCouse>
    )
}