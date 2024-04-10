import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;

    ul {
        width: 60%;
        margin: 0;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
    }

    li {
        font-family: var(--font-ru);
        font-size: 30px;
        text-align: center;
        align-self: center;
        width: 100%;
    }
    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
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
