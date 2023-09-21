import { ContainerHeader, ContainerNavigation, ContainerButtons, ButtonLogIn, ButtonSingUp } from "./styles";
import logoHeader from "../../assets/logo.svg"

export function Header() {
    return(
        <ContainerHeader>
            <img src={logoHeader} alt="" />
            <ContainerNavigation>
                <a href="">Home</a>
                <a href="">Courses</a>
                <a href="">About</a>
                <a href="">FAQ</a>
                <a href="">Blog</a>
            </ContainerNavigation>
            <ContainerButtons>
                <ButtonLogIn>Log in</ButtonLogIn>
                <ButtonSingUp>Sing Up</ButtonSingUp>
            </ContainerButtons>
        </ContainerHeader>
    )
}