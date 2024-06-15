import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "../SideMenu/SideMenu.styled";
import { useGlobalContext } from "../../context/globalContext";

import guide from "../../assets/media/midjourney_guide.pdf";
import clientPrompt from "../../assets/media/clients_prompt.pdf";
import contentPrompt from "../../assets/media/content_prompt.pdf";

const SideMenu = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const { isMenuOpen, toggleMenu } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // Измените значение 768 на свое желаемое значение порога ширины экрана
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
                        navigate("/gallery");
                        toggleMenu();
                    }}
                >
                    Галерея
                </li>
                <li
                    onClick={() => {
                        navigate("/contacts");
                        toggleMenu();
                    }}
                >
                    Контакты
                </li>
                <li>
                    <a
                        href={guide}
                        className="guide"
                        rel="noreferrer"
                        target="_blank"
                    >
                        MidJourney
                    </a>
                </li>
                <li>
                    <a
                        href={contentPrompt}
                        className="content"
                        rel="noreferrer"
                        target="_blank"
                    >
                        КОНТЕНТ-ПЛАН
                    </a>
                </li>
                <li>
                    <a
                        href={clientPrompt}
                        className="clients"
                        rel="noreferrer"
                        target="_blank"
                    >
                        ЦЕЛЕВАЯ АУДИТОРИЯ
                    </a>
                </li>
            </ul>
        </Wrapped>
    );
};

export default SideMenu;
