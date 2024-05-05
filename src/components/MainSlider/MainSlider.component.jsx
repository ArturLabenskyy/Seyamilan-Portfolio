import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import Wrapped from "./mainSlider.styled";
// import SlideCard from "../SlideCard/SlideCard.component";
// import items from "../../assets/data/assets";

import vid from "../../assets/media/clip.mp4";

const MainSlider = () => {
    return (
        <Wrapped
            dangerouslySetInnerHTML={{
                __html: `
<video
  loop
  muted
  autoplay
  playsinline
  src="${vid}"
/>,
`,
            }}
        ></Wrapped>
    );
};

export default MainSlider;
