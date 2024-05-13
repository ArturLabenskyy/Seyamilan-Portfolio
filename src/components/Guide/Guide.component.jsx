import React from "react";
import Wrapped from "./Guide.styled";

import guide from "../../assets/media/midjourney_guide.pdf";

const Guide = () => {
    return (
        <Wrapped>
            <a href={guide} className="guide" rel="noreferrer" target="_blank">
                Инструкция по MidJourney
            </a>
        </Wrapped>
    );
};

export default Guide;
