import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    height: 85%;
    font-family: var(--font-ru);

    .swiper-button-prev,
    .swiper-button-next {
        color: var(--color-font);
    }
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        color: var(--color-font);
        text-align: center;

        h1,
        h2,
        h3 {
            margin: 1rem;
        }

        h1,
        h3 {
            color: #e6e0de;
            font-size: 1.5rem;
            /* border-bottom: 1px solid var(--color-secondary); */
        }

        h2 {
            font-size: 1.25rem;
        }

        h3 {
            font-size: 1rem;
        }

        span,
        h2 {
            color: #8ac4cf;
        }

        .img-container {
            height: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        img,
        .swiper-image,
        video {
            height: auto;
            max-height: 350px;
            width: 80%;
        }

        img,
        video {
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
