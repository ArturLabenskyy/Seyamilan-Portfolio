import React from "react";

import Wrapped from "./Service.styled";

// import designImg from "../../assets/media/designImg.jpg";

const Service = ({ serviceImg }) => {
    return (
        <Wrapped>
            <img src={serviceImg} alt="designImage" className="design-img" />
        </Wrapped>
    );
};

export default Service;
