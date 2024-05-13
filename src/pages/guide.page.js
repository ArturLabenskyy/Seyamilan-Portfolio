import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import Guide from "../components/Guide/Guide.component";
import Footer from "../components/Footer/Footer.component";

const GuidePage = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <Guide />
            <Footer />
        </>
    );
};

export default GuidePage;
