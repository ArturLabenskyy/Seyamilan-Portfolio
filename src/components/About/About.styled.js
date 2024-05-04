import styled from "styled-components";

import bg from "../../assets/media/about.jpg";

const Wrapped = styled.div`
    background: url(${bg});
    background-size: 100% 100%;
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 85%;
        width: 100%;
        margin-bottom: 0.5rem;
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
