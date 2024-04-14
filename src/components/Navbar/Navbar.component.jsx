import React, { useState, useEffect } from "react";
import { FaGripLines } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import Wrapped from "./Navbar.styled";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsSmallScreen(mediaQuery.matches);

        const handleResize = () => {
            setIsSmallScreen(mediaQuery.matches);
        };

        mediaQuery.addListener(handleResize);

        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);

    return (
        <Wrapped>
            <h3 className="text-logo">@seyamilan Photo | Video</h3>
            {isSmallScreen ? (
                <>
                    <div className="nav-menu " onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <IoCloseSharp className="navbar-icon" />
                        ) : (
                            <FaGripLines className="navbar-icon" />
                        )}
                    </div>
                </>
            ) : (
                <div className="nav-menu">
                    <ul>
                        <li>About</li>
                        <li>Photo</li>
                        <li>Video</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </Wrapped>
    );
};

export default Navbar;
