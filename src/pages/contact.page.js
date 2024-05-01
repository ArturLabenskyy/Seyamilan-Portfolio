import React from "react";
import Navbar from "../components/Navbar/Navbar.component.jsx";
import SideMenu from "../components/SideMenu/SideMenu.component.jsx";
import Contact from "../components/Contact/Contact.component.jsx";
import Footer from "../components/Footer/Footer.component.jsx";

const ContactPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPage;
