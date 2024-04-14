import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar.component";
import SideMenu from "./components/SideMenu/SideMenu.component";
import MainSlider from "./components/MainSlider/MainSlider.component";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="full-page">
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <SideMenu isMenuOpen={isMenuOpen} />
            <MainSlider />
        </div>
    );
}

export default App;
