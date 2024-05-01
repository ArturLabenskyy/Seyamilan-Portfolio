import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 87.8%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .swiper-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .mySwiper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
    }
`;

export default Wrapped;
