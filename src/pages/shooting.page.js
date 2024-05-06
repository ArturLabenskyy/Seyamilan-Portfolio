import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import Service from "../components/ServiceComponent/Service.component.jsx";
import Footer from "../components/Footer/Footer.component.jsx";

import shootingImg from "../assets/media/shootingImg.jpg";

const ShootingPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <Service serviceImg={shootingImg} />
            <Footer />
        </div>
    );
};

export default ShootingPage;
