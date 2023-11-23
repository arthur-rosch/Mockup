import { Modules } from "./components/Modules";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { ContainerMembersArea, ContainerModules, ListModules } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
export function MembersArea() {

    return(
        <ContainerMembersArea>
                <Header/>
                <Banner/>
                <ContainerModules>
                        <h1>Em Alta</h1>
                        <ListModules>
                                <Swiper pagination={{ clickable: true}} navigation slidesPerView={4} >
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                    <SwiperSlide className="slide-item">
                                            <Modules/>
                                    </SwiperSlide>
                                </Swiper>
                        </ListModules>
                </ContainerModules>
                <Footer/>
        </ContainerMembersArea>
    )
}