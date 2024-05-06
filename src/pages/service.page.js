import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import ServiceCard from "../components/ServicePicker/ServicePicker.component";
import Footer from "../components/Footer/Footer.component";

const ServicePage = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <ServiceCard />
            <Footer />
        </>
    );
};

export default ServicePage;
