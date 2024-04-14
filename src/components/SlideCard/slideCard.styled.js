import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 100%;
        margin: 10px;
        overflow: hidden;
        align-items: center;
        justify-content: center;

        img:hover {
            width: auto;
            height: auto;
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
`;

export default Wrapped;
