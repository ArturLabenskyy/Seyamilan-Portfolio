import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import ServiceSlider from "../components/ServiceSlider/ServiceSlider.component";

const DesignPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <ServiceSlider />
        </div>
    );
};

export default DesignPage;
