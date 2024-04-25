import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram, FaInstagram } from "react-icons/fa";

import Wrapped from "./Contact.styled";
import tg from "../../assets/media/tg.png";
import ig from "../../assets/media/ig.png";

const Contact = () => {
    return (
        <Wrapped>
            <Link to="https://t.me/seyamilan" className="container">
                <h1>
                    @seyamilan <FaTelegram className="tg-icon" />
                </h1>
                <img src={tg} alt="qr-code" className="tg-img" />
            </Link>
            <Link
                to="https://www.instagram.com/seyamilan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="container"
            >
                <h1>
                    @seyamilan <FaInstagram className="ig-icon" />
                </h1>
                <img src={ig} alt="qr-code" className="ig-img" />
            </Link>
        </Wrapped>
    );
};

export default Contact;
