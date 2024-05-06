import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import Service from "../components/ServiceComponent/Service.component.jsx";
// import ServiceSlider from "../components/ServiceSlider/ServiceSlider.component";
import Footer from "../components/Footer/Footer.component.jsx";

// import { shootingBank } from "../assets/data/serviceBank";
import shootingImg from "../assets/media/shootingImg.jpg";

const ShootingPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <Service serviceImg={shootingImg} />
            {/* <ServiceSlider content={shootingBank} /> */}
            <Footer />
        </div>
    );
};

export default ShootingPage;
