import React from "react";
import Navbar from "../components/Navbar/Navbar.component.jsx";
import SideMenu from "../components/SideMenu/SideMenu.component.jsx";
import About from "../components/About/About.component.jsx";
import Footer from "../components/Footer/Footer.component.jsx";

const AboutPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;
