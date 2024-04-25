import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import ServiceCard from "../ServiceCard/ServiceCard.component";
import Wrapped from "./ServiceSlider.styled";

import "swiper/css";

const ServiceSlider = ({ content }) => {
    return (
        <Wrapped>
            <Swiper
                direction={"vertical"}
                spaceBetween={10}
                slidesPerView={1.1}
                className="mySwiper"
            >
                {content.map((obj) => {
                    return (
                        <SwiperSlide className="swiper-slide">
                            <ServiceCard content={obj} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Wrapped>
    );
};

export default ServiceSlider;
