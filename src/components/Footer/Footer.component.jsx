import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import logo from "../../assets/media/logo.png";

import Wrapped from "./Footer.styled";

const Footer = () => {
    return (
        <Wrapped>
            <div className="footer-socials">
                <a
                    href="https://www.linkedin.com/in/artur-labenskyy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/ArturLabenskyy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsGithub />
                </a>
            </div>

            <div className="footer-copyright">
                <small>&copy; Artur Labenskyy. All rights reserved, 2024</small>
            </div>
        </Wrapped>
    );
};

export default Footer;
