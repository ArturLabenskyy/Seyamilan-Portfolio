import React from "react";

import vid from "../../assets/media/clip.mp4";

import Wrapped from "./main.styled";

const Main = () => {
    return (
        <Wrapped
            dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${vid}"
        />,
        `,
            }}
        ></Wrapped>
    );
};

export default Main;
