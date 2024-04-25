import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-family: var(--font-main);

        .container {
            width: 80%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: var(--color-font);
        }

        img {
            width: 60%;
            height: 60%;
        }

        .tg-icon,
        .ig-icon {
            vertical-align: middle;
        }

        .tg-icon {
            color: #0b6bb6;
        }

        .ig-icon {
            color: #c13584;
        }

        h1 {
            height: 10%;
            margin: 0;
            color: var(--font-main);
            text-align: center;
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
