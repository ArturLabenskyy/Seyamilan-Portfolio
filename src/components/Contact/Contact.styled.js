import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: var(--font-main);

    .container {
        width: 70%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--color-font);
    }

    img {
        width: 50%;
        height: 60%;
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
        /* width: 100%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-family: var(--font-main); */

        /* .container {
            width: 70%;
            height: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: var(--color-font);
        } */

        /* img {
            width: 50%;
            height: 60%;
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
        } */
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        .container {
            height: 40%;
        }
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
