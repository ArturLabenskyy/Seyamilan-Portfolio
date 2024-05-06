import styled from "styled-components";

const Wrapped = styled.div`
    display: ${(props) => (props.isLargeScreen ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    position: fixed;
    left: ${(props) => (props.isopen ? "0" : "-100%")};
    width: 100%;
    height: 92.9%;
    background-color: var(--color-bg);
    opacity: 0.6;
    transition: left 0.3s ease;

    ul {
        width: 60%;
        margin: 0;
        padding: 0;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }

    li {
        font-family: var(--font-ru);
        color: var(--color-font);
        font-size: 30px;
        text-align: center;
        align-self: center;
        width: 100%;
        border-bottom: solid 1px var(--color-font);
    }

    .list-visible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 2s linear, transform 1s ease-in-out;
    }

    .list-hidden {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        display: ${(props) => (props.isLargeScreen ? "none" : "flex")};
        z-index: 999;
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        display: ${(props) => (props.isLargeScreen ? "flex" : "none")};
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
