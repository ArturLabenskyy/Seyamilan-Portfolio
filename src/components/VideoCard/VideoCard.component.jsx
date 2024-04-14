import React from "react";
import clip from "../../assets/clip.mp4";

const Card = () => {
    return (
        <div>
            <video width="340" height="700" loop muted autoPlay>
                <source src={clip} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
        </div>
    );
};

export default Card;
