import { ContainerMembersArea } from "./styles";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Modules } from "./components/Modules";

export function MembersArea() {
    return(
        <ContainerMembersArea>
            <Header/>
            <Banner/>
            <Modules/>
            <Footer/>
        </ContainerMembersArea>
    )
}