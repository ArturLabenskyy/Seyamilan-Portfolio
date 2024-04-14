import vid from "./clip.mp4";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

const imgData = [
    {
        id: 0,
        isImage: false,
        context: vid,
    },
    {
        id: 1,
        isImage: true,
        context: img1,
    },
    {
        id: 2,
        isImage: true,
        context: img2,
    },
    {
        id: 3,
        isImage: true,
        context: img3,
    },
];

export default imgData;
