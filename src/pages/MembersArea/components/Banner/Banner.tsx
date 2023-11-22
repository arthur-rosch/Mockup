import banner from '../../../../assets/pseudo.svg'
import { ContainerBanner } from './styles'
export function Banner() {
    return(
        <ContainerBanner>
            <img src={banner} alt="" />
            <div>
                <span>Lançamento</span>
                <h1>Projeto 120 Dias</h1>
                <p>Já pensou em transformar seu corpo em <br/> 120 Dias? Adquira e comece agora mesmo <br /> sua metamorfose.</p>
                <button>Assitir</button>
            </div>
        </ContainerBanner>
    )
}