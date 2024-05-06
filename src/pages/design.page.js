import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import Footer from "../components/Footer/Footer.component";
import Service from "../components/ServiceComponent/Service.component";

import designImg from "../assets/media/designImg.jpg";

const DesignPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <Service serviceImg={designImg} />
            <Footer />
        </div>
    );
};

export default DesignPage;
