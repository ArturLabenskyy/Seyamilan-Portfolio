import vid from "./clip.mp4";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

const handleDragStart = (e) => e.preventDefault();
const items = [
    <video width="300px" height="800px" loop muted autoPlay>
        <source src={vid} type="video/mp4" />
        Ваш браузер не поддерживает видео.
    </video>,
    <img
        src={img1}
        onDragStart={handleDragStart}
        role="presentation"
        className="photo-slide"
        alt="image1"
    />,
    <img
        src={img2}
        onDragStart={handleDragStart}
        role="presentation"
        className="photo-slide"
        alt="image2"
    />,
    <img
        src={img3}
        onDragStart={handleDragStart}
        role="presentation"
        className="photo-slide"
        alt="image3"
    />,
];

export default items;
