import { ContainerMembersArea, ContainerModules, ListModules } from "./styles";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Modules } from "./components/Modules";
import Slider from "react-slick";
export function MembersArea() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return(
        <ContainerMembersArea>
            <Header/>
            <Banner/>
            <ContainerModules>
                <h1>Em Alta</h1>
                    <ListModules>
                            <Modules/>
                            <Modules/>
                            <Modules/>
                            <Modules/>
                            <Modules/>
                    </ListModules>
            </ContainerModules>
            <Footer/>
        </ContainerMembersArea>
    )
}