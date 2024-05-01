import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./ServiceCard.styled";
import { GiClick } from "react-icons/gi";

const ServiceCard = () => {
    const [leftContent, setLeftContent] = useState(false);
    const [rightContent, setRightContent] = useState(false);

    const navigate = useNavigate();

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
            <div
                className="one"
                onClick={handleLeftClick}
                onMouseEnter={handleLeftClick}
            >
                <div
                    className={
                        leftContent ? "content-visible" : "content-hidden"
                    }
                >
                    <h1>ДИЗАЙН</h1>
                    <a
                        href="#design"
                        onClick={() => {
                            navigate("/services/design");
                        }}
                    >
                        <GiClick className="click-icon" />
                    </a>
                </div>
            </div>
            <div
                className="two"
                onClick={handleRightClick}
                onMouseEnter={handleRightClick}
            >
                <div
                    className={
                        rightContent ? "content-visible" : "content-hidden"
                    }
                >
                    <h1>СЪЕМКА</h1>
                    <a
                        href="#shooting"
                        onClick={() => {
                            navigate("/services/shooting");
                        }}
                    >
                        <GiClick className="click-icon" />
                    </a>
                </div>
            </div>
        </Wrapped>
    );
};

export default ServiceCard;
