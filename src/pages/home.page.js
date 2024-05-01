import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import MainSlider from "../components/MainSlider/MainSlider.component";
import Footer from "../components/Footer/Footer.component";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <MainSlider />
            <Footer />
        </>
    );
};

export default HomePage;
