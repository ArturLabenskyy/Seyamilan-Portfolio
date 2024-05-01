import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import ServiceSlider from "../components/ServiceSlider/ServiceSlider.component";
import Footer from "../components/Footer/Footer.component";

import { designBank } from "../assets/data/serviceBank";

const DesignPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <ServiceSlider content={designBank} />
            <Footer />
        </div>
    );
};

export default DesignPage;
