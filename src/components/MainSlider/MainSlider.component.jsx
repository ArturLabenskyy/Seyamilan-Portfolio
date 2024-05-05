import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import Wrapped from "./mainSlider.styled";
// import SlideCard from "../SlideCard/SlideCard.component";
// import items from "../../assets/data/assets";

import vid from "../../assets/media/clip.mp4";

const MainSlider = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

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
                ref={videoRef}
                onClick={playVideo}
                width="300px"
                height="800px"
                loop
                muted
                autoPlay
            >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Wrapped>
    );
};

export default MainSlider;
