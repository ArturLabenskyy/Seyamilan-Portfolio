import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

import Wrapped from "./Footer.styled";

const Footer = () => {
    return (
        <Wrapped>
            <div className="footer-socials">
                <a
                    href="https://www.linkedin.com/in/labenskyy"
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
                <a href="https://ar2r.pro/" rel="noreferrer" target="_blank">
                    <FaLaptopCode />
                </a>
            </div>
            <div className="footer-copyright">
                <small>
                    &copy; Powered by <span>Ar2r</span>, 2024
                </small>
            </div>
        </Wrapped>
    );
};

export default Footer;
