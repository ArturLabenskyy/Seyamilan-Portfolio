import React from "react";
import Wrapped from "../SideMenu/SideMenu.styled";
import { useGlobalContext } from "../../context/globalContext";

const SideMenu = () => {
    const { isMenuOpen } = useGlobalContext();

    return (
        <Wrapped isopen={isMenuOpen}>
            <ul className={isMenuOpen ? "list-visible" : "list-hidden"}>
                <li>Обо Мне</li>
                <li>Видео Съемка</li>
                <li>Фото Съемка</li>
                <li>Контакты</li>
            </ul>
        </Wrapped>
    );
};

export default SideMenu;
