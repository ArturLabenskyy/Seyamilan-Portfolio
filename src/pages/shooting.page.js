import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import ServiceSlider from "../components/ServiceSlider/ServiceSlider.component";
import Footer from "../components/Footer/Footer.component.jsx";

import { shootingBank } from "../assets/data/serviceBank";

const ShootingPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <ServiceSlider content={shootingBank} />
            <Footer />
        </div>
    );
};

export default ShootingPage;
