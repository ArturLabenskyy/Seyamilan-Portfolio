import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 90%;
            height: 90%;
        }

        video {
            width: 100%;
            height: 100%;
        }

        .text-container {
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 100px;
            left: 60px;
            font-family: var(--font-ru);
            color: var(--color-font);
            /* font-size: 20px; */
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
`;

export default Wrapped;
