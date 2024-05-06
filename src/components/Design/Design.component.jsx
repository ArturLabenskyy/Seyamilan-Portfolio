import React from "react";

import Wrapped from "./Design.styled";

import designImg from "../../assets/media/designImg.jpg";

const Design = () => {
    return (
        <Wrapped>
            <img src={designImg} alt="designImage" className="design-img" />
        </Wrapped>
    );
};

export default Design;
