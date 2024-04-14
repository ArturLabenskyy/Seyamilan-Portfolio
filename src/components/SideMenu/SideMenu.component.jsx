import React from "react";
import Wrapped from "../SideMenu/SideMenu.styled";

const SideMenu = ({ isMenuOpen }) => {
    const isOpen = isMenuOpen;

    return (
        <Wrapped isOpen={isOpen}>
            <ul>
                <li>Обо Мне</li>
                <li>Фото Съемка</li>
                <li>Видео Съемка</li>
                <li>Контакты</li>
            </ul>
        </Wrapped>
    );
};

export default SideMenu;
