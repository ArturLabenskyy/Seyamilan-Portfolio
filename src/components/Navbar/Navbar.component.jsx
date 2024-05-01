import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaGripLines } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { useGlobalContext } from "../../context/globalContext";

import Wrapped from "./Navbar.styled";

const Navbar = () => {
    const { isMenuOpen, toggleMenu } = useGlobalContext();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const navigate = useNavigate();

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
            <h3
                className="text-logo"
                onClick={() => {
                    navigate("/");
                }}
            >
                @seyamilan Photo | Video | Design
            </h3>
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
