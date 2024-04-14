import React from "react";

import Wrapped from "./mainSlider.styled";

import SlideCard from "../SlideCard/SlideCard.component";
import items from "../../assets/assets";

const MainSlider = () => {
    return (
        <Wrapped>
            {items.map((item) => {
                return <SlideCard item={item} />;
            })}
        </Wrapped>
    );
};

export default MainSlider;
