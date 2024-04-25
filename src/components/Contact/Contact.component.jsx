import React from "react";
import { Link } from "react-router-dom";

import Wrapped from "./Contact.styled";
import tg from "../../assets/media/tg.gif";
import ig from "../../assets/media/ig.jpg";

const Contact = () => {
    return (
        <Wrapped>
            <Link to="https://t.me/seyamilan" className="container">
                <img src={tg} alt="qr-code" className="tg-img" />
            </Link>
            <Link
                to="https://www.instagram.com/seyamilan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="container"
            >
                <img src={ig} alt="qr-code" className="ig-img" />
            </Link>
        </Wrapped>
    );
};

export default Contact;
