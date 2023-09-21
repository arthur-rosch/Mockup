import imgBanner from "../../../assets/banner.svg"
import { ContainerBanner, ContainerButtons, ContainerInformation, ButtonJoin, ButtonPlans } from "./styles"

export function Banner() {
    return(
        <ContainerBanner>
            <ContainerInformation>
                <h1>
                    Search and find your best courses with easy way
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Proin amet ac nunc porta volutpat semper donec eget. Bibendum gravida sagittis tortor eu sit. Tempor molestie eget sit lorem.
                </p>
                <ContainerButtons>
                    <ButtonJoin>Join us now!</ButtonJoin>
                    <ButtonPlans>Sell all plans</ButtonPlans>
                </ContainerButtons>
            </ContainerInformation>
            <img src={imgBanner} alt="" />
        </ContainerBanner>
    )
}