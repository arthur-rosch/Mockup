import logo from '../../../../assets/rreebeberb.png'
import { ContainerFooter, Information, Brand ,Institutional ,Help, Social } from "./styles";
import { FacebookLogo, TwitterLogo, YoutubeLogo} from 'phosphor-react'
export function Footer() {
    return(
        <ContainerFooter>
            <Information>
                <Brand>
                    <img src={logo} alt="" />
                    <p>Desperte todo o seu <br/> pontencial.</p>
                </Brand>
                <Institutional>
                    <p>INSTITUCIONAL</p>
                    <div>
                        <a href="">Inicio</a>
                        <a href="">Minha Conta</a>
                    </div>
                </Institutional>
                <Help>
                    <p>AJUDA</p>
                    <div>
                        <a href="">Suporte</a>
                        <a href="">Políticas de Privacidade</a>
                    </div>
                </Help>
                <Social>
                    <p>NOS ACOMPANHE</p>
                    <div>
                        <FacebookLogo size={32} weight="thin" />
                        <TwitterLogo size={32} weight="thin" />
                        <YoutubeLogo size={32} weight="thin" />
                    </div>
                </Social>

            </Information>
        </ContainerFooter>
    )
}