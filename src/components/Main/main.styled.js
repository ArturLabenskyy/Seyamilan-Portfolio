import styled from "styled-components";

const Wrapped = styled.div`
    height: 86.9%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h3 {
        color: #f3f3f3;
    }

    .swiper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    video {
        height: 80%;
        width: 90%;
    }
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 86.9%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        h3 {
            color: #f3f3f3;
        }

        .swiper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        video {
            height: 80%;
            width: 90%;
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }

    // Small screen + Laptop screen
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    }

    //  Desktops + large screen
    @media only screen and (min-width: 1025px) and (max-width: 1920px) {
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1921px) {
    }
`;

export default Wrapped;
