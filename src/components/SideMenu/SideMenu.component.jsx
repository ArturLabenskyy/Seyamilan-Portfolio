import React from "react";
import Wrapped from "../SideMenu/SideMenu.styled";

const SideMenu = () => {
    return (
        <Wrapped>
            {/* <div className="side-menu"> */}
            <ul>
                <li>Обо Мне</li>
                <li>Фото Съемка</li>
                <li>Видео Съемка</li>
                <li>Контакты</li>
            </ul>
            {/* </div> */}
        </Wrapped>
    );
};

export default SideMenu;
