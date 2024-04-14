import styled from "styled-components";

const Wrapped = styled.div`
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-secondary);
    font-family: var(--font-en);
    color: var(--color-font);
    padding-left: 0.7rem;
    margin-bottom: 0;

    .nav-menu {
        width: 30rem;
    }

    .nav-menu ul {
        margin-right: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
    }

    .nav-menu ul li {
        font: 25px bold;
        font-family: var(--font-en);
    }

    h3 {
        margin: 0;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        h3 {
            font-size: 17px;
        }

        .nav-menu {
            width: 2rem;
            align-items: center;
            margin-right: 0.7rem;
        }

        .navbar-icon {
            width: 100%;
            height: 100%;
        }
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        h3 {
            font-size: 17px;
        }

        .nav-menu {
            width: 2rem;
            align-items: center;
            margin-right: 0.7rem;
        }

        .navbar-icon {
            width: 100%;
            height: 100%;
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
