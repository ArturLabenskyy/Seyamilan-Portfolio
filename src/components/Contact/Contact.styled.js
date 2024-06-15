import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    height: 83%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: var(--font-main);

    .container {
        width: 70%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--color-font);
    }

    img {
        width: 10rem;
        height: 10rem;
    }

    .tg-icon,
    .ig-icon {
        vertical-align: middle;
    }

    .tg-icon,
    .h1-tg {
        color: #0b6bb6;
    }

    .ig-icon,
    .h1-ig {
        color: #c13584;
    }

    h1 {
        height: 10%;
        margin: 1.6rem;
        font-size: 150%;
        color: var(--font-main);
        text-align: center;
    }
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        img {
            height: 10rem;
            width: 10rem;
        }
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        .container {
            height: 40%;
        }

        img {
            width: 10rem;
            height: 10rem;
        }
    }

    // Small screen + Laptop screen
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        img {
            width: 10rem;
            height: 10rem;
        }
    }

    //  Desktops + large screen
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        h1 {
            font-size: 2rem;
        }
        img {
            width: 15rem;
            height: 15rem;
        }
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
        h1 {
            font-size: 3rem;
        }

        img {
            width: 30%;
            height: 100%;
        }
    }
`;

export default Wrapped;
