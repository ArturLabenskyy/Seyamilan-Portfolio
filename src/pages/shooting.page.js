import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import ServiceSlider from "../components/ServiceSlider/ServiceSlider.component";

import { shootingBank } from "../assets/data/serviceBank";

const ShootingPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <ServiceSlider content={shootingBank} />
        </div>
    );
};

export default ShootingPage;
