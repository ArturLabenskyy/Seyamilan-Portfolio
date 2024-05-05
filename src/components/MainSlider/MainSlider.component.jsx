import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import Wrapped from "./mainSlider.styled";
// import SlideCard from "../SlideCard/SlideCard.component";
// import items from "../../assets/data/assets";

import vid from "../../assets/media/clip.mp4";

const MainSlider = () => {
    return (
        <Wrapped>
            {/* <Swiper spaceBetween={10} slidesPerView={1} className="swiper">
    {items.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <SlideCard item={item} key={index} />
            </SwiperSlide>
        );
    })}
    </Swiper> */}
            <video
                width="300px"
                height="800px"
                autoPlay={true}
                loop={true}
                controls={false}
                muted
            >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Wrapped>
    );
};

export default MainSlider;
