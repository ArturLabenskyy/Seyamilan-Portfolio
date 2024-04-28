import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "../SideMenu/SideMenu.styled";
import { useGlobalContext } from "../../context/globalContext";

const SideMenu = () => {
    const { isMenuOpen } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <Wrapped isopen={isMenuOpen}>
            <ul className={isMenuOpen ? "list-visible" : "list-hidden"}>
                <li
                    onClick={() => {
                        navigate("/about");
                    }}
                >
                    Обо Мне
                </li>
                <li
                    onClick={() => {
                        navigate("/services");
                    }}
                >
                    Услуги
                </li>
                <li
                    onClick={() => {
                        navigate("/contacts");
                    }}
                >
                    Контакты
                </li>
            </ul>
        </Wrapped>
    );
};

export default SideMenu;
