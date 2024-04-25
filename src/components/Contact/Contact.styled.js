import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        /* .container {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        } */

        .container {
            width: 90%;
            height: 45%;
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 5%;
        }
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }

    // Small screen + Laptop screen
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    }

    //  Desktops + large screen
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
    }
`;

export default Wrapped;
