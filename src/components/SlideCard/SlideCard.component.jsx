import React from "react";
import Wrapped from "./slideCard.styled";

const SlideCard = ({ item }) => {
    return (
        <Wrapped>
            {item.content}
            {!item.isVideo} :{" "}
            <div className="text-container">
                <h3 className="h-header">{item.header}</h3>
                <p className="p-description">{item.description}</p>
                <p className="p-link">{item.link}</p>
            </div>
        </Wrapped>
    );
};

export default SlideCard;
