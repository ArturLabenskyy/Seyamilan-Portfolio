import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "../SideMenu/SideMenu.styled";
import { useGlobalContext } from "../../context/globalContext";

const SideMenu = () => {
    const { isMenuOpen, toggleMenu } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <Wrapped isopen={isMenuOpen}>
            <ul className={isMenuOpen ? "list-visible" : "list-hidden"}>
                {/* <li
                    onClick={() => {
                        navigate("/about");
                        toggleMenu();
                    }}
                >
                    Обо Мне
                </li> */}
                <li
                    onClick={() => {
                        navigate("/services");
                        toggleMenu();
                    }}
                >
                    Услуги
                </li>
                <li
                    onClick={() => {
                        navigate("/contacts");
                        toggleMenu();
                    }}
                >
                    Контакты
                </li>
            </ul>
        </Wrapped>
    );
};

export default SideMenu;
