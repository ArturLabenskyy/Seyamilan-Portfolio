import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Wrapped from "./mainSlider.styled";
import SlideCard from "../SlideCard/SlideCard.component";
import items from "../../assets/data/assets";

const MainSlider = () => {
    return (
        <Wrapped>
            <Swiper spaceBetween={10} slidesPerView={1.2} className="swiper">
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SlideCard item={item} key={index} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Wrapped>
    );
};

export default MainSlider;
