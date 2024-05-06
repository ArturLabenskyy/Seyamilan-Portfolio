import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import Gallery from "../components/Gallery/Gallery.component";
import Footer from "../components/Footer/Footer.component";

const GalleryPage = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <Gallery />
            <Footer />
        </>
    );
};

export default GalleryPage;
