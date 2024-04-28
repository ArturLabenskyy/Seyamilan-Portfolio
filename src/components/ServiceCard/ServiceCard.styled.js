import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    font-family: var(--font-ru);
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        color: var(--color-font);
        text-align: center;

        h1,
        h2,
        h3 {
            margin: 1rem;
        }

        h1 {
            color: #8acefd;
            font-size: 2rem;
            /* border-bottom: 1px solid var(--color-secondary); */
        }

        h2 {
            font-size: 1.7rem;
        }

        h3 {
            font-size: 1rem;
        }

        span,
        h2 {
            color: var(--color-secondary);
        }

        .img-container {
            height: 30rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        img,
        .swiper-image {
            height: 100%;
            width: 95%;
        }

        img {
            border: 1px solid var(--color-font);
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
