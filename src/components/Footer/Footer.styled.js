import styled from "styled-components";
const Wrapped = styled.footer`
    height: auto;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
    text-align: center;
    font-size: 1rem;

    a {
        color: var(--color-font);
    }

    .footer-socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .footer-socials a {
        background-color: var(--color-bg);
        color: var(--color-font);
        border-radius: 0.7rem;
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

    span {
        color: var(--color-secondary);
        font-size: 1.2rem;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        .permalinks {
            flex-direction: column;
            gap: 1rem;
        }
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 1.3rem;
    }

    // Small screen + Laptop screen
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    }
    //  Desktops + large screen
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        a {
            font-size: 1rem;
        }

        small {
            font-size: 2rem;
        }
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
        a {
            font-size: 1rem;
        }

        small {
            font-size: 1rem;
        }
    }
`;

export default Wrapped;
