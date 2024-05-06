import React from "react";

import Wrapped from "./Service.styled";

const Service = ({ serviceImg }) => {
    return (
        <Wrapped>
            <img src={serviceImg} alt="designImage" className="design-img" />
        </Wrapped>
    );
};

export default Service;
