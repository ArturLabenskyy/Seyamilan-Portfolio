import React, { useState, useEffect } from "react";
import { FaGripLines } from "react-icons/fa";

import Wrapped from "./Navbar.styled";

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Wrapped>
            <h3 className="text-logo">@seyamilan Photo | Video</h3>
            {isSmallScreen ? (
                <>
                    <div className="nav-menu-close">
                        <FaGripLines />
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
