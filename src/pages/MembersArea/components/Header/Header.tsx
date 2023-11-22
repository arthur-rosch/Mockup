import { UserList, SignOut } from "phosphor-react";
import logo from '../../../../assets/rreebeberb.png'
import { ContainerButtons, ContainerHeader } from "./styles";
export function Header() {
    return(
        <ContainerHeader>
            <img src={logo} alt="" />
            <ContainerButtons>
                <button>
                    <UserList size={32} weight="thin" />
                </button>
                <button>
                    <SignOut size={32} weight="thin" />
                </button>
            </ContainerButtons>
        </ContainerHeader>
    )
}