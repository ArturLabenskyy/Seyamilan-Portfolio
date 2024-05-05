import styled from "styled-components";

const Wrapped = styled.div`
    box-sizing: border-box;
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
            height: 100%;
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
`;

export default Wrapped;
