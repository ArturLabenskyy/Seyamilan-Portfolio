import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    height: 86%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    overflow: auto;
    background-color: var(--color-bg);

    .design-img {
        width: 100%;
    }
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 86%;
        overflow: auto;
        background-color: var(--color-bg);

        .design-img {
            width: 100%;
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
        .design-img {
            width: 70%;
        }
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
        .design-img {
            width: 70%;
        }
    }
`;

export default Wrapped;
