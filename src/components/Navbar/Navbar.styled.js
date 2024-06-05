import styled from "styled-components";

const Wrapped = styled.div`
    height: 7vh;
    display: flex;
    position: sticky;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-font);
    font-family: var(--font-en);
    color: var(--color-font);
    padding-left: 0.7rem;
    margin-bottom: 0.2rem;

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
        font-family: var(--font-ru);
        transition: color 0.5s ease-in-out;
    }

    h3 {
        margin: 0;
        transition: color 0.5s ease-in-out;
    }

    .text-logo:hover {
        cursor: pointer;
        color: var(--color-secondary);
        transition: color 0.5s ease-in-out;
    }

    li:hover {
        cursor: pointer;
        color: var(--color-secondary);
        transition: color 0.5s ease-in-out;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        h3 {
            font-size: 14px;
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
            font-size: 1.4rem;
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
        h3 {
            font-size: 1.1rem;
        }

        .nav-menu ul li {
            font: 20px bold var(--font-ru);
        }
    }

    //  Desktops + large screen FullHD
    @media only screen and (min-width: 1025px) and (max-width: 1920px) {
    }

    // Extra large + TV screen 2K + 4K
    @media only screen and (min-width: 1921px) {
        li:hover {
            cursor: pointer;
        }

        .nav-menu {
            width: 30%;
        }

        h3 {
            font-size: 2rem;
        }

        .nav-menu ul li {
            text-align: center;
            font-size: 2.5rem;
        }
    }
`;

export default Wrapped;
