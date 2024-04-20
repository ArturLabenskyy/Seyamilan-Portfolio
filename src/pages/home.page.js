import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import MainSlider from "../components/MainSlider/MainSlider.component";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <MainSlider />
        </>
    );
};

export default HomePage;
