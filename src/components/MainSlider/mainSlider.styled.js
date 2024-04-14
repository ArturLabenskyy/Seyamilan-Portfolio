import styled from "styled-components";

const Wrapped = styled.div`
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 92.9%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        h3 {
            color: #f3f3f3;
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
`;

export default Wrapped;
