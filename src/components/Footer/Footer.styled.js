import styled from "styled-components";

const Wrapped = styled.footer`
    height: 2%;
    display: grid;
    flex-direction: column;
    align-items: center;
    background: var(--color-bg);
    text-align: center;
    font-size: 1rem;

    a {
        color: var(--color-font);
    }

    .footer-socials {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 4rem;
    }

    .footer-socials a {
        background-color: var(--color-bg);
        color: var(--color-font);
        padding: 0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;
    }

    .footer-socials a:hover {
        background: transparent;
        color: var(--color-secondary);
        border-color: var(--color-bg);
    }

    .footer-copyright {
        color: var(--color-font);
    }

    .logo {
        height: 100%;
        width: 100%;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        .permalinks {
            flex-direction: column;
            gap: 1rem;
        }

        .footer-socials {
            margin-bottom: 10px;
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
