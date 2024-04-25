import React from "react";

import Wrapped from "./ServiceCard.styled";

const ServiceCard = ({ content }) => {
    return (
        <Wrapped>
            <h1>{content.name}</h1>
            <h3>{content.description}</h3>
            <h2>{content.price}</h2>
        </Wrapped>
    );
};

export default ServiceCard;
