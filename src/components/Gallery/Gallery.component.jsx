import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Wrapped from "./Gallery.styled";

import galleryPhotoBank from "../../assets/data/galleryPhotoBank";

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <Wrapped>
            <PhotoAlbum
                layout="columns"
                photos={galleryPhotoBank}
                className="gallery"
                onClick={({ index }) => setIndex(index)}
            />
            <Lightbox
                slides={galleryPhotoBank}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </Wrapped>
    );
};

export default Gallery;
