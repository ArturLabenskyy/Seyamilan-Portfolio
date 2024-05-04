import React from "react";

import Wrapped from "./About.styled";

const About = () => {
    return (
        <Wrapped>
            <div className="typewriter">
                <h1>
                    Привет, меня зовут Настя.
                    <br />
                    Я фотограф с более чем 10ти летним опытом.
                    <br />
                    Последний год также углубляюсь в работу с нейросетями.
                    <br />
                    Буду рада помочь
                </h1>
            </div>
        </Wrapped>
    );
};

export default About;
