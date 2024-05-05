import React from "react";

import vid from "../media/clip.webm";

const items = [
    {
        isVideo: true,
        content: (
            <video width="300px" height="800px" loop muted autoPlay>
                <source src={vid} type="video/webm" />
                Ваш браузер не поддерживает видео.
            </video>
        ),
    },
];

export default items;
