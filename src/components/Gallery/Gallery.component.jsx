import React from "react";
import PhotoAlbum from "react-photo-album";
import Wrapped from "./Gallery.styled";

import galleryPhotoBank from "../../assets/data/galleryPhotoBank";

const Gallery = () => {
    return (
        <Wrapped>
            <PhotoAlbum
                layout="columns"
                photos={galleryPhotoBank}
                className="gallery"
            />
        </Wrapped>
    );
};

export default Gallery;
