import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SideMenu from "../components/SideMenu/SideMenu.component";
import Main from "../components/Main/Main.component";
import Footer from "../components/Footer/Footer.component";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <Main />
            <Footer />
        </>
    );
};

export default HomePage;
