import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "../SideMenu/SideMenu.styled";
import { useGlobalContext } from "../../context/globalContext";

const SideMenu = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const { isMenuOpen, toggleMenu } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768); // Измените значение 768 на свое желаемое значение порога ширины экрана
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Проверяем размер экрана при загрузке компонента

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Wrapped isopen={isMenuOpen} isLargeScreen={isLargeScreen}>
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
