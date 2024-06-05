import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 86%;
        width: 95%;
        overflow: auto;

        .gallery {
            height: 100%;
        }
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }

    // Small screen + Laptop screen
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        height: 82%;
        width: 100%;
        overflow: auto;

        .gallery {
            height: 100%;
        }
    }

    //  Desktops + large screen
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        height: 86%;
        width: 100%;
        overflow: auto;

        .gallery {
            height: 100%;
        }
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
        height: 85%;
        width: 100%;
        overflow: auto;

        .gallery::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: #d55959;
        }
    }
`;

export default Wrapped;
