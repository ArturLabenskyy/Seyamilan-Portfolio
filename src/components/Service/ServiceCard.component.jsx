import React, { useState } from "react";
import Wrapped from "./ServiceCard.styled";

const ServiceCard = () => {
    const [leftContent, setLeftContent] = useState(false);
    const [rightContent, setRightContent] = useState(false);

    const handleLeftClick = () => {
        setLeftContent(true);
        setRightContent(false);
    };

    const handleRightClick = () => {
        setLeftContent(false);
        setRightContent(true);
    };

    return (
        <Wrapped className="container">
            <div className="one" onClick={handleLeftClick}>
                <div
                    className={
                        leftContent ? "content-visible" : "content-hidden"
                    }
                >
                    <h1>DESIGN</h1>
                    <button>MORE INFO</button>
                </div>
            </div>
            <div className="two" onClick={handleRightClick}>
                <div
                    className={
                        rightContent ? "content-visible" : "content-hidden"
                    }
                >
                    <h1>
                        PHOTO<br></br>&&<br></br>VIDEO
                    </h1>
                    <button>MORE INFO</button>
                </div>
            </div>
        </Wrapped>
    );
};

export default ServiceCard;
