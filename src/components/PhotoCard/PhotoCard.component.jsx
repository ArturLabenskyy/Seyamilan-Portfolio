import React from "react";
import Wrapped from "./photoCard.styled";

const PhotoCard = ({ obj }) => {
    return (
        <Wrapped>
            {obj.isImg ? (
                <div>
                    <h2>Моя GIF-картинка</h2>
                    <img src={obj.context} alt="my image" />
                </div>
            ) : (
                <div>
                    <h2>Мое видео</h2>
                    <video width="320" height="240" loop muted>
                        <source src={obj.context} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            )}
        </Wrapped>
    );
};

export default PhotoCard;
